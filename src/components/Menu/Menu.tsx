import React, { useState } from 'react';
import classNames from 'classnames';
import { MySlider } from '../../common/MySlider/MySlider';
import { Button } from '../../common/Button/Button';
import Modal from '../../common/Modal/Modal';
import Form from '../../common/Form/Form';
import { ToastContainer } from 'react-toastify';

const cx = classNames.bind(require('./styles.scss'));

interface MenuProps {
  id?: string;
}

const Menu = (props: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuImages = [
    'images/menu/page-1.webp',
    'images/menu/page-2.webp',
    'images/menu/page-3.webp',
  ];

  const handleOpenModal = () => {
    setIsOpen(true);
  };
  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <section id={props.id} className={cx('menu')}>
        <div className={cx('container', 'menuContainer')}>
          <h1 className={cx('menuTitle')}>Меню</h1>
          <MySlider images={menuImages} />
        </div>
        <Button variant="dark" onClick={handleOpenModal}>
          Забронировать
        </Button>
      </section>
      <Modal isOpen={isOpen} onClose={handleCloseModal}>
        <Form onCloseModal={handleCloseModal} />
      </Modal>
      <ToastContainer autoClose={3000} />
    </>
  );
};

export default Menu;
