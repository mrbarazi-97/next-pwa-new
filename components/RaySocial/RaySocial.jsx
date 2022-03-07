import Image from 'next/image';
import Link from 'next/link';

export function RaySocial() {
  return (
    <div className="max-w-6xl mx-auto my-10">
      <div className="text-center">
        <h1 dir="rtl" className="text-mainBlue text-3xl font-extrabold pb-10">
          رای بیت در شبکه های اجتماعی
        </h1>
        <p dir="rtl" className="text-mainBlue text-xl font-semibold">
          با پیوستن به شبکه های اجتماعی ما، از آخرین اخبار درباره رای بیت و
          ارزهای دیجیتال مطلع شوید.
        </p>
      </div>
      <div className="text-white flex flex-row max-w-lg justify-between mx-auto py-10">
        <button className="flex flex-row">
          <Link href="#" passHref>
            <div className="flex flex-row items-center justify-between rounded-full h-15 w-40 ">
              <div className=" ">
                <Image
                  className="bg-mainBlue rounded-full"
                  src="/assets/images/social/community__social_telegram.svg"
                  width={50}
                  height={50}
                  alt="telegram logo"
                />
              </div>
              <h1>@raybit</h1>
            </div>
          </Link>
        </button>
        <button>
          <Link href="#" passHref>
            <div className="flex flex-row items-center justify-between rounded-full h-15 w-40 ">
              <div>
                <Image
                  src="/assets/images/social/community__social_twitter.svg"
                  width={50}
                  height={50}
                  alt="twitter logo"
                />
              </div>
              <h1>@raybit</h1>
            </div>
          </Link>
        </button>
      </div>
      <div className="flex flex-row items-center justify-between max-w-xs mx-auto">
        <button>
          <Link href="#" passHref>
            <Image
              src="/assets/images/social/community__social_facebook.svg"
              width={50}
              height={50}
              alt="facebook logo"
            />
          </Link>
        </button>
        <button>
          <Link href="#" passHref>
            <Image
              src="/assets/images/social/community__social_instagram.svg"
              width={50}
              height={50}
              alt="instagram logo"
            />
          </Link>
        </button>
        <button>
          <Link href="#" passHref>
            <Image
              src="/assets/images/social/community__social_reddit.svg"
              width={50}
              height={50}
              alt="reddit logo"
            />
          </Link>
        </button>
      </div>
    </div>
  );
}
