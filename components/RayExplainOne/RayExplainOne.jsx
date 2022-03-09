import Image from 'next/image';

export function RayExplainOne() {
  return (
    <div className="flex max-w-6xl items-center mx-auto my-10" dir="rtl">
      <div className="flex flex-col w-1/2  mx-auto">
        <h1 className="font-extrabold text-3xl pb-8">
          کامل ترین اپ معاملات ارز دیجیتال در ایران
        </h1>
        <p className="font-medium text-2xl">
          رای بیت با ارائه کامل ترین اپلیکیشن معاملات ارز دیجیتال برای کاربران
          ایرانی، فضایی ایجاد کرده است که با تنوع ارزی و سرویس های متنوع، امکان
          استفاده ایرانیان از حداکثر ظرفیت دنیای ارزهای دیجیتال فراهم شود.
        </p>
      </div>
      <div className="flex w-2/4 justify-center">
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
