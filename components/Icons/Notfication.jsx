import Image from 'next/image';
export function Notfication() {
  return (
    <div className="lg:px-auto px-2">
      <Image
        src="/assets/images/heroicons/options__notification.svg"
        height={21}
        width={21}
        alt="option_notfication"
      />
    </div>
  );
}
