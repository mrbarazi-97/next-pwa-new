import { Notfication } from '../Icons';

export function OptionDescription() {
  return (
    <div
      dir="rtl"
      className="flex flex-row max-w-6xl justify-between mt-4 mx-auto"
    >
      <div className="">
        <Notfication />
      </div>
      <div className="flex flex-row justify-around mx-auto item-center lg:px-auto px-2">
        <h3 className="flex-row font-semibold items-center hidden">
          <span className="w-2.5 h-2.5 rounded-full bg-mainBlue border-none mx-1"></span>
          رای بیت به بازار کوکوین متصل شد
        </h3>
        <h3 className="flex flex-row font-semibold items-center">
          <span className="w-2.5 h-2.5 rounded-full bg-mainBlue border-none mx-1"></span>
          ورژن 1.0.0 رای بیت منتشر شد
        </h3>
        <h3 className=" flex-row font-semibold items-center hidden">
          <span className="w-2.5 h-2.5 rounded-full bg-mainBlue border-none mx-1"></span>
          با ثبت نام در رای بیت، MANA جایزه بگیرید
        </h3>
      </div>
    </div>
  );
}
