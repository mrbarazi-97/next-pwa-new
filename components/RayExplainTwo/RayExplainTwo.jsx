import Image from 'next/image';

export function RayExplainTwo() {
  return (
    <div className="bg-white py-10">
      <div
        className=" flex flex-col max-w-6xl items-center mx-auto  lg:flex-row lg:px-5 "
        dir="rtl"
      >
        <div className="flex flex-col mx-auto justify-center px-5 lg:max-w-xl">
          <h1 className="font-extrabold text-3xl pb-8">
            خرید، فروش و نگهداری هزاران رمزارز
          </h1>
          <p className="font-medium text-xl lg:text-2xl">
            اپلیکیشن معاملاتی رای بیت، با اتصال به بازاراهای جهانی، بستری را
            فراهم کرده است که به صورت لحظه ای و با بهترین قیمت، ارز دیجیتال
            مدنظر خود را خریداری کرده و در بستری امن و در کیف پول احتصاصی رای
            بیت خود نگهداری نمایید.{' '}
          </p>
        </div>
        <div className="lg:w-1/2 lg:justify-center hidden lg:flex ">
          <Image
            src="/assets/images/banner/network.jpg"
            alt="network image"
            width={240}
            height={240}
          />
        </div>
      </div>
    </div>
  );
}
