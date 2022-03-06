import Head from 'next/head';
import { Logo } from '../Logo';
import Link from 'next/link';

export function Header() {
  return (
    <header className=" bg-darkBlue text-lightGray ">
      <Head>
        <title>Raybit - be happy</title>
        <link
  rel="stylesheet"
  href="https://unpkg.com/swiper@8/swiper-bundle.min.css"
/>

      </Head>
      <nav dir="rtl" className="flex mr-40 pt-3 max-w-full">
        <Logo />
        <ul className="flex max-w-4xl text-sm pt-2">
          <li className="pl-3">
            <Link href="#" pssHref>
              بازار
            </Link>
          </li>
          <li className="pl-3">
            <Link href="#" pssHref>
              قوانین
            </Link>
          </li>
          <li className="pl-3">
            <Link href="#" pssHref>
              کارمزد ها
            </Link>
          </li>
          <li className="pl-3">
            <Link href="#" pssHref>
              سطوح کاربری
            </Link>{' '}
          </li>
          <li className="pl-3">
            <Link href="#" pssHref>
              مجله
            </Link>
          </li>
          <li className="pl-3">
            <Link href="#" pssHref>
              درباره ما
            </Link>
          </li>
          <li className="pl-3">
            <Link href="#" pssHref>
              تماس با ما
            </Link>
          </li>
          <li className="pl-3">
            <Link href="#" pssHref>
              دانلود
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
