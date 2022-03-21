import { Layout, RaySocial, DarkBackground, Trust } from '../components';
import Image from 'next/image';

export default function about() {
  return (
    <div>
      <Layout>
        <DarkBackground>
          <div
            dir="rtl"
            className="px-6 lg:max-w-3xl max-w-lg mx-auto text-white text-center items-center flex flex-col"
          >
            <div>
              <h1 className="text-3xl font-black py-2">
                ورود به دنیای ارز دیجیتال
              </h1>
              <p>کامل ترین اپلیکیشن مبادلات ارز دیجیتال در ایران</p>
            </div>
            <div className="pt-20">
              <h1 className="text-3xl font-black py-2 pb-10">
                خرید، فروش و نگهداری هزاران رمزارز
              </h1>
              <p className="lg:text-2xl max-w-3xl md:text-xl mx-auto">
                اپلیکیشن معاملاتی رای بیت، با اتصال به بازاراهای جهانی، بستری را
                فراهم کرده است که به صورت لحظه ای و با بهترین قیمت، ارز دیجیتال
                مدنظر خود را خریداری کرده و در بستری امن و در کیف پول احتصاصی
                رای بیت خود نگهداری نمایید.
              </p>
            </div>
          </div>

          <div className="flex flex-row justify-evenly mx-auto lg:max-w-6xl ">
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
            <div className=" hidden lg:flex">
              <Image
                className=""
                src="/assets/images/heroicons/hero__ethereum.svg"
                alt="hero__ethereum"
                width={170}
                height={170}
              />
            </div>

            <div className=" hidden lg:flex">
              <Image
                className=""
                src="/assets/images/heroicons/hero__raybit.svg"
                alt="hero__raybit"
                width={190}
                height={190}
              />
            </div>
          </div>
          <Trust />
        </DarkBackground>
        <div
          dir="rtl"
          className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 px-5 py-10 "
        >
          <div className="flex flex-col max-w-3xl">
            <p>01</p>
            <div className="divide-y">
              <h1>ماموریت ما: </h1>
              <div>
                <h3 className="py-5">
                  کامل ترین پلتفرم رمزارز برای کاربران ایرانی
                </h3>
                <p className="text-gray">
                  ما در رای بیت تصمیم گرفته ایم که کامل ترین و بزرگترین اپلیکیشن
                  معاملات ارز دیجیتال را برای کاربران ایرانی توسعه دهیم. تا
                  درکنار تنوع ارزی، کاربران بتوانند در محیطی امن و با سرعت و
                  کارایی بالا، به خرید و فروش و نگهداری ارزهای دیجیتال مدنظر خود
                  بپردازند.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col max-w-3xl">
            <p>02</p>
            <div className="divide-y">
              <h1>چشم انداز ما: </h1>
              <div>
                <h3 className="py-5">
                  سهم ما از انقلاب بلاکچین و ارزهای دیجیتال
                </h3>
                <p className="text-gray">
                  ما عقیده داریم دنیای ارزهای دیجیتال هنوز در ابتدای مسیر خود
                  قرار دارد و این فرصت برای ما ایرانیان نیز فراهم است که در این
                  انقلاب تکنولوژی سهم داشته باشیم. رای بیت میکوشد تا ورود
                  کاربران ایرانی به دنیای ارزهای دیجیتال و فعالیت در این عرصه را
                  تسهیل نماید.
                </p>
              </div>
            </div>
          </div>
        </div>
        <RaySocial />
      </Layout>
    </div>
  );
}
