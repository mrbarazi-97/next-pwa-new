import Image from 'next/image';

export function RayExplainOne() {
  return (
    <div
      className="flex flex-col max-w-6xl items-center mx-auto my-10 lg:flex-row lg:justify-between lg:px-5 "
      dir="rtl"
    >
      <div className="flex flex-col mx-auto justify-center px-5 lg:max-w-xl">
        <h1 className="font-extrabold text-3xl pb-8">
          کامل ترین اپ معاملات ارز دیجیتال در ایران
        </h1>
        <p className="font-medium text-xl lg:text-2xl">
          رای بیت با ارائه کامل ترین اپلیکیشن معاملات ارز دیجیتال برای کاربران
          ایرانی، فضایی ایجاد کرده است که با تنوع ارزی و سرویس های متنوع، امکان
          استفاده ایرانیان از حداکثر ظرفیت دنیای ارزهای دیجیتال فراهم شود.
        </p>
      </div>
      <div className="lg:w-1/2 lg:justify-center hidden lg:flex ">
        <Image
          src="/assets/images/logo/raybit_logo.png"
          alt="network image"
          width={240}
          height={240}
        />
      </div>
    </div>
  );
}
