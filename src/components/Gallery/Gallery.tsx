import classNames from 'classnames';
import ScrollAnimation from 'react-animate-on-scroll';

const cx = classNames.bind(require('./styles.scss'));

interface GalleryProps {
  id?: string;
}

const Gallery = (props: GalleryProps) => {
  const galleryText =
    'Мы предлагаем разнообразное меню, которое удовлетворит вкусы самых взыскательных гурманов. ' +
    'В нашем меню вы найдете классические блюда европейской и итальянской кухни, приготовленные ' +
    'из свежих, натуральных продуктов. Каждый наш шедевр – от нежного карпаччо до сочного стейка ' +
    '"Рибай" – готовится с любовью и вниманием к деталям.';

  const galleryUrl = {
    video1:
      'https://www.dropbox.com/scl/fi/9xwimxky9xoea15mt5wgm/1.mp4?rlkey=cmhduo9errr8rwha9qloj3wit&raw=1',
    video2:
      'https://www.dropbox.com/scl/fi/wckei6cxh3m1uou0v4vrm/2.mp4?rlkey=dwqnrfpq2uvwltgec469r053t&raw=1',
    video3:
      'https://www.dropbox.com/scl/fi/3he9w3nhpq08077r7g1sn/3.mp4?rlkey=6bojc6bjei7f8bc0d1zssvt3b&raw=1',
    video4:
      'https://www.dropbox.com/scl/fi/zgzjqgrtyyn7mz80haknj/4.mp4?rlkey=iyyewcf4oh5p21vieyy8rc4sx&raw=1',
  };

  return (
    <section id={props.id} className={cx('gallery')}>
      <div className={cx('container')}>
        <p className={cx('galleryText')}>{galleryText}</p>
        <div className={cx('galleryGrid')}>
          <ScrollAnimation className={cx('video1')} animateIn="fadeInLeft">
            <video
              src={galleryUrl.video1}
              className={cx('video')}
              autoPlay
              muted
              preload="metadata"
              poster="/images/snapshot-1.jpg"
            ></video>
          </ScrollAnimation>
          <ScrollAnimation className={cx('photo2')} animateIn="fadeInRight">
            <img src="/images/hot-platter.jpg" className="img" alt="photo" draggable="false" />
          </ScrollAnimation>
          <ScrollAnimation className={cx('photo3')} animateIn="fadeInRight">
            <img src="/images/bruschetta.jpg" className={cx('img')} alt="photo" draggable="false" />
          </ScrollAnimation>
          <ScrollAnimation className={cx('video4')} animateIn="fadeInRight">
            <video
              src={galleryUrl.video2}
              className={cx('video')}
              autoPlay
              muted
              loop
              poster="/images/snapshot-2.jpg"
              preload="metadata"
            />
          </ScrollAnimation>
          <ScrollAnimation className={cx('photo5')} animateIn="fadeInRight">
            <img
              src="/images/set-of-dishes.jpg"
              className={cx('img')}
              alt="photo"
              draggable="false"
            />
          </ScrollAnimation>
          <ScrollAnimation className={cx('photo6')} animateIn="fadeInRight">
            <img
              src="/images/bruschetta-with-fish.jpg"
              className={cx('img')}
              alt="photo"
              draggable="false"
            />
          </ScrollAnimation>
          <ScrollAnimation className={cx('photo7')} animateIn="fadeInLeft">
            <img src="/images/pilaf.jpg" className={cx('img')} alt="photo" draggable="false" />
          </ScrollAnimation>
          <ScrollAnimation className={cx('video8')} animateIn="fadeInRight">
            <video
              src={galleryUrl.video3}
              className={cx('video')}
              autoPlay
              muted
              loop
              poster="/images/snapshot-3.jpg"
              preload="metadata"
            />
          </ScrollAnimation>
          <ScrollAnimation className={cx('video9')} animateIn="fadeInRight">
            <video
              src={galleryUrl.video4}
              className={cx('video')}
              autoPlay
              muted
              loop
              poster="/images/snapshot-4.jpeg"
              preload="metadata"
            />
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
