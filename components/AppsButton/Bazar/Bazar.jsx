import Link from 'next/link';
import Image from 'next/image';

export function Bazar() {
  return (
    <div>
      <Link href="#" passHref>
        <button className="w-28 h-15 flex justify-between items-center">
          <h2> کافه بازار</h2>
          <Image
            src="/assets/images/logo/app-download__bazaar.svg"
            width={35}
            height={35}
            alt="raybit-qr-code"
          />
        </button>
      </Link>
    </div>
  );
}
