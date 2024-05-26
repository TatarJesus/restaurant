import classNames from 'classnames';
import { SocialIcon } from '../../common/SocialIcon/SocialIcon';

const cx = classNames.bind(require('./styles.scss'));

interface FooterProps {
  id: string;
}

const Footer = (props: FooterProps) => {
  return (
    <footer id={props.id} className={cx('footer')}>
      <div className={cx('footerWrapper', 'container')}>
        <div className={cx('footerContacts')}>
          <p className={cx('footerText')}>г. Москва, ул. Московская, д.9</p>
          <p className={cx('footerText')}>
            Телефон:
            <a className={cx('footerLink')} href="tel:+7(999)999-99-99">
              +7 (999) 999-99-99
            </a>
          </p>
          <p className={cx('footerText')}>
            Email:
            <a className={cx('footerLink')} href="mailto:contact@host.ru">
              contact@host.ru
            </a>
          </p>
        </div>
        <SocialIcon width="43" />
      </div>
    </footer>
  );
};

export default Footer;
