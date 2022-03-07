import Head from 'next/head';
import { Logo } from '../Logo';
import Link from 'next/link';

export function Header() {
  return (
    <header className=" bg-darkBlue text-lightGray ">
      <Head>
        <title>Raybit_Next</title>
        
      </Head>
      <nav dir="rtl" className="flex pt-3 max-w-6xl mx-auto">
        <div className="flex flex-row items-center">
          <Logo height={32} width={32} />
          <Link href="/" passHref>
            <h1 className="text-2xl px-3">رای بیت</h1>
          </Link>
        </div>

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
