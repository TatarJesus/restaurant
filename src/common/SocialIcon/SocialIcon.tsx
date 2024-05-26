import React from 'react';
import classNames from 'classnames';
import { SvgIcon } from '../SvgIcon/SvgIcon';
import { SocialIconProps } from '../types';

const cx = classNames.bind(require('./styles.scss'));
export const SocialIcon = ({ width }: SocialIconProps) => {
  return (
    <div className={cx('socialLinks')}>
      <a href="https://t.me" target="_blank">
        <SvgIcon src="/icons/telegram.svg" width={width} />
      </a>
      <a href="https://vk.com" target="_blank">
        <SvgIcon src="/icons/vk.svg" width={width} />
      </a>
    </div>
  );
};
