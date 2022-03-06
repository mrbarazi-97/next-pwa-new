import Image from 'next/image';
import Link from 'next/link';

export function Logo() {
  return (
    <div className="flex">
      <Image
        src="/assets/images/logo/raybit-logo.svg"
        height={32}
        width={32}
        alt="raybit-main-logo"
      />
      <Link href="/" passHref>
        <h1 className="text-2xl px-3">رای بیت</h1>
      </Link>
    </div>
  );
}
