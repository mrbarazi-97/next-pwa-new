import Link from 'next/link';
import Image from 'next/image';

export function Facebook() {
  return (
    <div>
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
    </div>
  );
}
