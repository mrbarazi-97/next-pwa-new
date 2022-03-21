import {
  Layout,
  DarkBackground,
  FacebookContact,
  TwitterContact,
  InstagramContact,
} from '../components';
import Link from 'next/link';

export default function contact() {
  return (
    <Layout>
      <DarkBackground>
        <div
          dir="rtl"
          className="text-white max-w-2xl px-3 pb-14 mx-auto item-center text-center "
        >
          <div className="flex flex-col text-center items-center">
            <h1 className="text-2xl font-bold py-10">تماس با رای بیت</h1>
            <p>
              دفتر مرکزی : تبریز خیابان ولیعصر خیابان اوحدی پلاک 1 طبقه 3 -
              رایبیت
            </p>
          </div>

          <p className="py-5">
            <span> شماره تماس : </span>
            <Link href="tel:02168597751" passHref>
              <a title="برای تماس کلیک کنید">02168597751</a>
            </Link>
          </p>
          <div className="flex flex-row justify-center">
            <p>شبکه های اجتماعی : </p>
            <div dir="ltr" className="flex flex-row px-2 ">
              <FacebookContact color={'text-white'} />
              <TwitterContact color={'text-white '} customStyle={'mx-3'} />
              <InstagramContact color={'text-white'} />
            </div>
          </div>
        </div>
      </DarkBackground>
    </Layout>
  );
}
