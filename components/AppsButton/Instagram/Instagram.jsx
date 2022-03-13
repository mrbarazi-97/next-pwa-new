import Link from 'next/link';
import Image from 'next/image';

export function Instagram() {
  return (
    <div>
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
    </div>
  );
}
