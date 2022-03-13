import { Telegram, Instagram, Twitter, Facebook, Reddit } from '..';

//import styles from './styles/RaySocial.module.css'
//className={`max-w-6xl mx-auto my-10 ${styles.community}`}
export function RaySocial() {
  return (
    <div className="mx-auto my-10 flex flex-col text-center">
      <div className="text-center">
        <h1 dir="rtl" className="text-mainBlue text-3xl font-extrabold pb-10">
          رای بیت در شبکه های اجتماعی
        </h1>
        <p
          dir="rtl"
          className="text-mainBlue text-2xl font-normal mx-auto px-5"
        >
          با پیوستن به شبکه های اجتماعی ما، از آخرین اخبار درباره رای بیت و
          ارزهای دیجیتال مطلع شوید.
        </p>
      </div>
      <div className="text-white flex flex-col mx-auto py-10 lg:flex-row">
        <Telegram />
        <Twitter />
      </div>
      <div className="opacity-50 flex flex-row justify-between items-center mx-auto">
        <Instagram />
        <Reddit />
        <Facebook />
      </div>
    </div>
  );
}
