import Link from 'next/link';

export function Roadmap() {
  return (
    <div>
      <div className="flex flex-row divide-mainBlue divide-x py-20 lg:max-w-1/3">
        <div dir="rtl" className="block items-center content-center w-1/2">
          <p className="flex flex-row items-center pb-14">
            <span className="w-2.5 h-2.5 rounded-full bg-mainBlue mx-3"></span>
            <Link href="/about" passHref>
              درباره ما
            </Link>
          </p>
          <p className="flex flex-row items-center pb-14">
            <span className="w-2.5 h-2.5 rounded-full bg-mainBlue mx-3"></span>
            <Link href="/contact" passHref>
              تماس با ما
            </Link>
          </p>
          <p className="flex flex-row items-center pb-14">
            <span className="w-2.5 h-2.5 rounded-full bg-mainBlue mx-3"></span>
            <Link href="/role" passHref>
              قوانین
            </Link>
          </p>
          <p className="flex flex-row items-center ">
            <span className="w-2.5 h-2.5 rounded-full bg-mainBlue mx-3"></span>
            <Link href="/wages" passHref>
              کارمزد ها
            </Link>
          </p>
        </div>
        <div dir="ltr" className="flex flex-col w-1/2 pt-10">
          <p className="flex flex-row items-center pb-14">
            <span className="w-2.5 h-2.5 rounded-full bg-mainBlue mx-3"></span>
            <Link href="/about" passHref>
              مجله
            </Link>
          </p>
          <p className="flex flex-row items-center pb-14">
            <span className="w-2.5 h-2.5 rounded-full bg-mainBlue mx-3"></span>
            <Link href="/contact" passHref>
              سطوح کاربری
            </Link>
          </p>
          <p className="flex flex-row items-center pb-14">
            <span className="w-2.5 h-2.5 rounded-full bg-mainBlue mx-3"></span>
            <Link href="/role" passHref>
              بازار
            </Link>
          </p>
          <p className="flex flex-row items-center ">
            <span className="w-2.5 h-2.5 rounded-full bg-mainBlue mx-3"></span>
            <Link href="/wages" passHref>
              دانلود
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
