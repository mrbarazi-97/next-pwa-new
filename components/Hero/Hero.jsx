import Image from 'next/image';
import { DarkBackground } from '..';

export function Hero() {
  return (
    <>
      <DarkBackground>
        <div className="flex flex-col mx-auto items-center px-3">
          <div dir="rtl" className=" text-white mx-auto pt-12">
            <h2 className="mb-10 text-3xl font-bold">
              ورود به دنیای ارز دیجیتال
            </h2>
            <div className="block">
              <p className="lg:text-lg text-xl font-medium">
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
                دانلود رای بیت
              </button>
            </div>
          </div>
          <div className="flex flex-row ">
            <div className="">
              <Image
                className=""
                src="/assets/images/heroicons/hero__binance.svg"
                alt="hero__binance"
                width={60}
                height={60}
              />
            </div>
            <div className="">
              <Image
                className=""
                src="/assets/images/heroicons/hero__polygon.svg"
                alt="hero__polygon"
                width={100}
                height={100}
              />
            </div>
            <div className=" hidden">
              <Image
                className=""
                src="/assets/images/heroicons/hero__ethereum.svg"
                alt="hero__ethereum"
                width={170}
                height={170}
              />
            </div>

            <div className=" hidden">
              <Image
                className=""
                src="/assets/images/heroicons/hero__raybit.svg"
                alt="hero__raybit"
                width={190}
                height={190}
              />
            </div>
          </div>
        </div>
      </DarkBackground>
    </>
  );
}
