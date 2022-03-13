import Link from 'next/link';
import Image from 'next/image';

export function Reddit() {
  return (
    <div className="mx-20">
      <Link href="#" passHref>
        <button>
          <Image
            src="/assets/images/social/community__social_reddit.svg"
            width={50}
            height={50}
            alt="Reddit logo"
          />
        </button>
      </Link>
    </div>
  );
}
