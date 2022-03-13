import React from 'react';
import { Logo, Bazar, Google, Roadmap, DarkBackground } from '..';
//height={32.1}
export function Footer() {
  return (
    <div>
      <DarkBackground>
        <div className="flex flex-col mx-auto text-white items-center px-10 lg:flex-row lg:max-w-6xl lg:justify-between">
          <div className="flex flex-col pt-10 lg:w-1/3">
            <div className="flex flex-row justify-evenly">
              <Bazar />
              <Google />
            </div>
            <div className="block mx-auto ">
              <p className="text-white py-5">
                کامل ترین اپلیکیشن مبادلات ارز دیجیتال در ایران
              </p>
              <p className="text-lightGray">
                خرید و فروش و نگهداری هزاران رمزارز در رای بیت
              </p>
            </div>
          </div>
          <Roadmap />
          <div dir="rtl" className="block pb-10 lg:w-1/3">
            <div className="flex flex-row items-center">
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
        </div>
      </DarkBackground>
    </div>
  );
}
