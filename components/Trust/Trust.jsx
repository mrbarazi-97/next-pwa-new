import Image from 'next/image';
export function Trust() {
  return (
    <div className="bg-darkBlue  ">
      <h1 className="text-2xl text-mainBlue pt-5 pb-10 font-semibold text-center">
        چرا ما قابل اعتماد هستیم
      </h1>
      <div
        dir="rtl"
        className="flex flex-row max-w-6xl mx-auto justify-evenly pb-5"
      >
        <div className="flex-col w-80 ">
          <div className="text-center">
            <Image
              src="/assets/images/trust/trust__images_binance.svg"
              alt="raybit-trust-binance"
              width={218}
              height={134}
            />
          </div>

          <h2 className="text-mainBlue text-xl text-center py-4 font-semibold">
            تنوع ارزی
          </h2>
          <p className="text-white text-center	">
            با اتصال به بازارهای جهانی، تنوع ارزی و حجم معاملاتی بالا فراهم شده
            است.
          </p>
        </div>
        <div className="flex-col w-80">
          <div className="text-center">
            <Image
              src="/assets/images/trust/trust__images_safe.svg"
              alt="raybit-trust-binance"
              width={218}
              height={134}
            />
          </div>

          <h2 className="text-mainBlue text-xl text-center py-4 font-semibold">
            امنیت بالا
          </h2>
          <p className="text-white align-center max-w-20 text-center">
            اولویت رای بیت همیشه امنیت است و بنابراین متخصصان ما امن ترین پلتفرم
            را برای استفاده شما فراهم کرده اند.
          </p>
        </div>
        <div className="flex-col w-80">
          <div className="text-center">
            <Image
              src="/assets/images/trust/trust__images_support.svg"
              alt="raybit-trust-binance"
              width={218}
              height={134}
            />
          </div>

          <h2 className="text-mainBlue text-xl text-center py-4 font-semibold">
            پشتیبانی 24 ساعته
          </h2>
          <p className="text-white align-center max-w-20 text-center">
            تیم پشتیانی رای بیت به صورت 24 ساعته آماده پاسخگویی به سوالات و
            مشکلات شما عزیزان می باشد.
          </p>
        </div>
      </div>
    </div>
  );
}
