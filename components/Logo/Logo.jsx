import Image from 'next/image';

export function Logo({ height, width }) {
  return (
    <div className="flex">
      <Image
        src="/assets/images/logo/raybit-logo.svg"
        height={`${height}`}
        width={`${width}`}
        alt="raybit-main-logo"
      />
    </div>
  );
}
