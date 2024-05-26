import React, { useState } from 'react';
import classNames from 'classnames';
import { ParallaxBanner } from 'react-scroll-parallax';
import { BannerLayer } from 'react-scroll-parallax/dist/components/ParallaxBanner/types';
import { Button } from '../../common/Button/Button';
import ScrollAnimation from 'react-animate-on-scroll';
import Modal from '../../common/Modal/Modal';
import Form from '../../common/Form/Form';
import { ToastContainer } from 'react-toastify';

const cx = classNames.bind(require('./styles.scss'));

interface BannerProps {
  id: string;
}

const Banner = (props: BannerProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const background: BannerLayer = {
    image: '/images/banner.jpg',
    translateY: [0, 50],
    opacity: [1, 0.3],
    scale: [1.05, 1, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true,
  };

  const headline: BannerLayer = {
    translateY: [0, 30],
    scale: [1, 1.05, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: false,
    expanded: false,
    children: (
      <ScrollAnimation animateIn={'fadeInUp'} className={cx('bannerWrapper')}>
        <h1 className={cx('bannerTitle')}>Добро пожаловать в ресторан "Гурман"!</h1>
        <ul className={cx('bannerList')}>
          <li className={cx('bannerList-item')}>
            Ресторан "Гурман" – это место, где встречаются изысканная кухня и уютная атмосфера. Наш{' '}
            <br />
            ресторан создан для тех, кто ценит высокое качество еды и безупречное обслуживание.
          </li>
        </ul>
        <Button onClick={handleOpenModal}>Забронировать</Button>
      </ScrollAnimation>
    ),
  };

  return (
    <>
      <ParallaxBanner id={props.id} layers={[background, headline]} className={cx('banner')} />
      <Modal isOpen={isOpen} onClose={handleCloseModal}>
        <Form onCloseModal={handleCloseModal} />
      </Modal>
      <ToastContainer autoClose={3000} />
    </>
  );
};

export default Banner;
