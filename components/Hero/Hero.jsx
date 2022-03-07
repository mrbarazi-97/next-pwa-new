import Image from 'next/image';
import { DarkBackground } from '..';

export function Hero() {
  return (
    <div>
      <DarkBackground height={32.1}>
        <div className="flex flex-row-reverse max-w-6xl mx-auto">
          <div dir="rtl" className=" text-white flex-1 mt-20">
            <h2 className="mb-10 text-4xl font-bold">
              ورود به دنیای ارز دیجیتال
            </h2>
            <div className="block  ">
              <p className="text-lg py-2 font-medium">
                کامل ترین اپلیکیشن مبادلات ارز دیجیتال در ایران
              </p>
              <p className="text-md py-2 font-normal">
                خرید و فروش و نگهداری هزاران رمز ارز در رای بیت
              </p>
            </div>
            <div className="flex mt-10">
              <h2 className="text-yellow py-3 text-2xl">
                همین الان شروع کنید!
              </h2>
              <button className="bg-mainBlue rounded-2xl py-3 px-8 mr-8 text-white text-2xl">
                دانلود رای بیت{' '}
              </button>
            </div>
          </div>
          <div className="flex-1 flex pt-20">
            <div className="absolute ml-80 pl-20 pt-10">
              <Image
                className=""
                src="/assets/images/heroicons/hero__binance.svg"
                alt="hero__binance"
                width="100"
                height="100"
              />
            </div>
            <div className="absolute ml-80 mt-60">
              <Image
                className="max-w-full"
                src="/assets/images/heroicons/hero__ethereum.svg"
                alt="hero__ethereum"
                width="150"
                height="150"
              />
            </div>
            <div className="absolute ml-80 pl-80 mb-40 ">
              <Image
                className=""
                src="/assets/images/heroicons/hero__polygon.svg"
                alt="hero__polygon"
                width="120"
                height="120"
              />
            </div>
            <div className="absolute mt-40 ml-80 pl-60">
              <Image
                className=""
                src="/assets/images/heroicons/hero__raybit.svg"
                alt="hero__raybit"
                width="180"
                height="180"
              />
            </div>
          </div>
        </div>
      </DarkBackground>
    </div>
  );
}
