import Image from 'next/image';

export function RayExplainTwo() {
  return (
    <div className="bg-white">
      <div className="flex max-w-6xl items-center mx-auto py-10 " dir="rtl">
        <div className="flex flex-col w-2/4">
          <h1 className="font-extrabold text-3xl pb-8">
            خرید، فروش و نگهداری هزاران رمزارز
          </h1>
          <p className="font-medium text-2xl">
            اپلیکیشن معاملاتی رای بیت، با اتصال به بازاراهای جهانی، بستری را
            فراهم کرده است که به صورت لحظه ای و با بهترین قیمت، ارز دیجیتال
            مدنظر خود را خریداری کرده و در بستری امن و در کیف پول احتصاصی رای
            بیت خود نگهداری نمایید.
          </p>
        </div>
        <div className="flex w-2/4 justify-center">
          <Image
            src="/assets/images/banner/network.jpg"
            alt="network image"
            width={320}
            height={320}
          />
        </div>
      </div>
    </div>
  );
}
