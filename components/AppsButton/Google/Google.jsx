import Link from 'next/link';
import Image from 'next/image';

export function Google() {
  return (
    <div>
      <Link href="#" passHref>
        <button className="w-32 h-12 flex justify-evenly items-center bg-bgBlue rounded-3xl">
          <h2>گوگل پلی</h2>
          <Image
            src="/assets/images/logo/app-download__google.svg"
            width={35}
            height={35}
            alt="raybit-qr-code"
          />
        </button>
      </Link>
    </div>
  );
}
