import Image from 'next/image';
import { Bazar, Google } from '..';

export function AppLinks() {
  return (
    <div className="h-auto bg-darkBlue ">
      <div className="flex flex-col mx-auto items-center pt-20 pb-20 lg:flex-row lg:max-w-6xl lg:justify-around">
        <div>
          <Image
            src="/assets/images/logo/app-download__qr.svg"
            width={220}
            height={220}
            alt="raybit-qr-code"
          />
        </div>
        <div className="text-white pt-10">
          <h1 className="text-center text-xl font-extrabold lg:text-2xl">
            دانلود اپلیکیشن معاملاتی رای بیت
          </h1>
          <h4 className="text-center pt-5">
            کامل ترین اپلیکیشن ارز دیجیتال برای کاربران ایرانی
          </h4>
          <div className="flex flex-row justify-between mt-10">
            <Bazar />
            <Google />
          </div>
        </div>
        <div className="hidden lg:flex">
          <Image
            src="/assets/images/logo/app-download.svg"
            width={200}
            height={200}
            alt="raybit-logo"
          />
        </div>
      </div>
    </div>
  );
}
