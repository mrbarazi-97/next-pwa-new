import { useState } from 'react';

import Link from 'next/link';
import Image from 'next/image';

import { photos } from '../../public/assets/assets/images';

import Style from './styles/Header.module.css';

export const Header = () => {
  const [background, setBackground] = useState('');
  const [menu, setMenu] = useState('');
  const [menu_top, setMenu_top] = useState('');
  const [menu_bottom, setMenu_bottom] = useState('');
  const [menu_top_back, setMenu_top_back] = useState('');
  const [menu_bottom_back, setMenu_bottom_back] = useState('');
  const [fixed, setFixed] = useState('');
  const [fixedLeft, setFixedLeft] = useState('');
  const [bottom, setBottom] = useState('');
  const [marginTop, setMarginTop] = useState('');
  const handleClick = () => {
    if (window.innerWidth >= 1025) return false;
    if (menu.length >= 1) {
      setMenu_top_back(`${Style.header__container_menu_icon_top_back}`);
      setMenu_bottom_back(`${Style.header__container_menu_icon_bottom_back}`);
      setMenu('');
      setBackground('');
      setMenu_top('');
      setMenu_bottom('');
      setFixed('');
      setFixedLeft('');
      setBottom('');
      setMarginTop('');
    } else {
      setMenu_top_back('');
      setMenu_bottom_back('');
      setMenu(`${Style.header__container_menu_active}`);
      setBackground(`${Style.header__menu_background_active}`);
      setMenu_top(`${Style.header__container_menu_icon_top_active}`);
      setMenu_bottom(`${Style.header__container_menu_icon_bottom_active}`);
      setFixed('fixed');
      setFixedLeft('1rem');
      setBottom('3.3rem');
      setMarginTop('0.03rem');
    }
  };
  return (
    <div className={Style.header} style={{ paddingBottom: bottom }}>
      <div className={Style.header__container}>
        <div
          className={Style.header__container_menu_icon}
          style={{ position: fixed, left: fixedLeft }}
          onClick={handleClick}
        >
          <span
            className={`${Style.header__container_menu_icon_top} ${
              menu_top.length >= 1 ? menu_top : ''
            } ${menu_top_back.length >= 1 ? menu_top_back : ''}`}
          ></span>
          <span
            className={`${Style.header__container_menu_icon_bottom} ${
              menu_bottom.length >= 1 ? menu_bottom : ''
            } ${menu_bottom_back.length >= 1 ? menu_bottom_back : ''}`}
          ></span>
        </div>
        <ul className={`${Style.header__container_menu} ${Style.menu}`}>
          <li className={Style.header__container_menu_li} onClick={handleClick}>
            <Link href="/login" passHref>
              ورود
            </Link>
          </li>
          <li className={Style.header__container_menu_li} onClick={handleClick}>
            <Link href="/register" passHref>
              ثبت نام
            </Link>
          </li>
          <li className={Style.header__container_menu_li} onClick={handleClick}>
            <Link href="/#" passHref>
              دانلود
            </Link>
          </li>
          <li className={Style.header__container_menu_li} onClick={handleClick}>
            <Link href="/contact" passHref>
              تماس با ما
            </Link>
          </li>
          <li className={Style.header__container_menu_li} onClick={handleClick}>
            <Link href="/about" passHref>
              درباره ما
            </Link>
          </li>
          <li className={Style.header__container_menu_li} onClick={handleClick}>
            <Link href="/#" passHref>
              مجله
            </Link>
          </li>
          <li className={Style.header__container_menu_li} onClick={handleClick}>
            <Link href="/userlevel" passHref>
              سطوح کاربری
            </Link>
          </li>
          <li className={Style.header__container_menu_li} onClick={handleClick}>
            <Link href="/wages" passHref>
              کارمزد ها
            </Link>
          </li>
          <li className={Style.header__container_menu_li} onClick={handleClick}>
            <Link href="/roles" passHref>
              قوانین
            </Link>
          </li>
          <li className={Style.header__container_menu_li} onClick={handleClick}>
            <Link href="/market" passHref>
              بازار
            </Link>
          </li>
        </ul>
        <div
          className={Style.header__container_logo}
          style={{ position: fixed, top: '0.85rem' }}
        >
          <h1
            className={Style.header__container_logo_h1}
            style={{ marginTop: marginTop }}
          >
            <Link href="/" passHref>
              رای بیت
            </Link>
          </h1>
          <Link href="/" style={{ marginTop: marginTop }} passHref>
            <Image
              width={100}
              height={100}
              className={Style.header__container_logo_img}
              src={photos.Logo}
              alt=""
              loading="lazy"
            />
          </Link>
        </div>
      </div>
      <div
        className={`${Style.header__menu_background} ${
          background.length >= 1 ? background : ''
        }`}
      ></div>
    </div>
  );
};
