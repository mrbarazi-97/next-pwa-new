import Link from 'next/link';
import Image from 'next/image';

export function Telegram() {
  return (
    <div className="lg:mr-20">
      <Link href="/#" passHref>
        <button className="mb-5 bg-lightBlue flex flex-row items-center justify-between rounded-full h-16 w-56 ">
          <div className="my-auto">
            <span className="bg-white absolute rounded-full w-12 h-12 mt-1 ml-1"></span>
            <Image
              src="/assets/images/social/community__social_telegram.svg"
              width={64}
              height={64}
              alt="twitter logo"
            />
          </div>
          <h1 className="text-xl font-normal pr-3">@raybit_official</h1>
        </button>
      </Link>
    </div>
  );
}
