import React from 'react';
import { DarkBackground } from '..';
import Link from 'next/link';
import { Logo, Bazar, Google } from '..';

export function Footer() {
  return (
    <div>
      <DarkBackground height={32.1}>
        <div className="flex flex-row-reverse max-w-6xl mx-auto text-white justify-between">
          <div dir="rtl" className="block w-1/3 pt-32">
            <div className="flex flex-row items-center ">
              <Logo height={80} width={80} />
              <h2 className="pr-4 font-extrabold text-2xl">
                سهم ما از انقلاب بلاکچین
              </h2>
            </div>
            <div>
              <p className="text-lg mx-auto pt-5">
                ما عقیده داریم دنیای ارزهای دیجیتال هنوز در ابتدای مسیر خود قرار
                دارد و این فرصت برای ما ایرانیان نیز فراهم است که در این انقلاب
                تکنولوژی سهم داشته باشیم. رای بیت میکوشد تا ورود کاربران ایرانی
                به دنیای ارزهای دیجیتال و فعالیت در این عرصه را تسهیل نماید.
              </p>
            </div>
          </div>
          <div className="flex flex-row w-1/3 divide-mainBlue divide-x py-20">
            <div dir="rtl" className="block items-center content-center w-1/2">
              <p className="flex flex-row items-center pb-14">
                <div className="w-2.5 h-2.5 rounded-full bg-mainBlue mx-3"></div>
                <Link href="/about" passHref>
                  درباره ما
                </Link>
              </p>
              <p className="flex flex-row items-center pb-14">
                <div className="w-2.5 h-2.5 rounded-full bg-mainBlue mx-3"></div>
                <Link href="/contact" passHref>
                  تماس با ما
                </Link>
              </p>
              <p className="flex flex-row items-center pb-14">
                <div className="w-2.5 h-2.5 rounded-full bg-mainBlue mx-3"></div>
                <Link href="/role" passHref>
                  قوانین
                </Link>
              </p>
              <p className="flex flex-row items-center ">
                <div className="w-2.5 h-2.5 rounded-full bg-mainBlue mx-3"></div>
                <Link href="/wages" passHref>
                  کارمزد ها
                </Link>
              </p>
            </div>
            <div dir="ltr" className="flex flex-col w-1/2 pt-10">
              <p className="flex flex-row items-center pb-14">
                <div className="w-2.5 h-2.5 rounded-full bg-mainBlue mx-3"></div>
                <Link href="/about" passHref>
                  مجله
                </Link>
              </p>
              <p className="flex flex-row items-center pb-14">
                <div className="w-2.5 h-2.5 rounded-full bg-mainBlue mx-3"></div>
                <Link href="/contact" passHref>
                  سطوح کاربری
                </Link>
              </p>
              <p className="flex flex-row items-center pb-14">
                <div className="w-2.5 h-2.5 rounded-full bg-mainBlue mx-3"></div>
                <Link href="/role" passHref>
                  بازار
                </Link>
              </p>
              <p className="flex flex-row items-center ">
                <div className="w-2.5 h-2.5 rounded-full bg-mainBlue mx-3"></div>
                <Link href="/wages" passHref>
                  دانلود
                </Link>
              </p>
            </div>
          </div>
          <div className="flex flex-col w-1/3 pt-40">
            <div className="flex flex-row justify-evenly">
              <Bazar />
              <Google />
            </div>
            <div className="block mx-auto">
              <p className="text-white py-5">
                کامل ترین اپلیکیشن مبادلات ارز دیجیتال در ایران
              </p>
              <p className="text-lightGray">
                خرید و فروش و نگهداری هزاران رمزارز در رای بیت
              </p>
            </div>
          </div>
        </div>
      </DarkBackground>
    </div>
  );
}
