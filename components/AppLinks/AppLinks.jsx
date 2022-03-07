import Image from 'next/image';
import { Bazar, Google } from '..';

export function AppLinks() {
  return (
    <div className="h-80 bg-darkBlue max-w-full">
      <div className="flex flex-row max-w-6xl mx-auto justify-evenly py-20">
        <div>
          <Image
            src="/assets/images/logo/app-download__qr.svg"
            width={200}
            height={200}
            alt="raybit-qr-code"
          />
        </div>
        <div className="text-white pt-10">
          <h1 className="text-center text-2xl font-extrabold">
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
        <div>
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
