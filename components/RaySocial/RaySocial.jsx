import Image from 'next/image';
import Link from 'next/link';

//import styles from './styles/RaySocial.module.css'
//className={`max-w-6xl mx-auto my-10 ${styles.community}`}
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
        <Link href="/#" passHref>
          <button>
            <div className="bg-lightBlue flex flex-row items-center justify-evenly rounded-full h-15 w-40 ">
              <div className="mt-1 fill-darkBlue">
                <span className="bg-white absolute rounded-full w-10 h-10 mt-1 ml-1"></span>
                <Image
                  src="/assets/images/social/community__social_twitter.svg"
                  width={50}
                  height={50}
                  alt="twitter logo"
                />
              </div>
              <h1>@raybit_official</h1>
            </div>
          </button>
        </Link>

        <Link href="/#" passHref>
          <button>
            <div className="bg-lightBlue flex flex-row items-center justify-evenly rounded-full h-15 w-40 ">
              <div className="mt-1 fill-darkBlue">
                <span className="bg-white absolute rounded-full w-10 h-10 mt-1 ml-1"></span>
                <Image
                  src="/assets/images/social/community__social_twitter.svg"
                  width={50}
                  height={50}
                  alt="twitter logo"
                />
              </div>
              <h1>@raybit_official</h1>
            </div>
          </button>
        </Link>
      </div>
      <div className="opacity-50  flex flex-row items-center justify-between max-w-xs mx-auto">
        <Link href="#" passHref>
          <button>
            <Image
              src="/assets/images/social/community__social_facebook.svg"
              width={50}
              height={50}
              alt="facebook logo"
            />
          </button>
        </Link>

        <Link href="#" passHref>
          <button>
            <Image
              src="/assets/images/social/community__social_instagram.svg"
              width={50}
              height={50}
              alt="instagram logo"
            />
          </button>
        </Link>

        <Link href="/#" passHref>
          <button>
            <Image
              src="/assets/images/social/community__social_reddit.svg"
              width={50}
              height={50}
              alt="reddit logo"
            />
          </button>
        </Link>
      </div>
    </div>
  );
}
