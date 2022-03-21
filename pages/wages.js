import { Layout } from '../components';

export default function wages() {
  return (
    <Layout>
      <div className="bg-darkBlue w-full h-auto bg-[url('/assets/images/background/wages__background.svg')]">
        <div className="max-w-6xl mx-auto px-3 flex flex-col text-center ">
          <h1 className="text-white text-3xl font-bold py-10">کارمزد ها</h1>
          <p className="text-white max-w-3xl mx-auto text-center item-center text-xl">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی
            در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را
            می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
            الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
          </p>
          <table
            dir="rtl"
            className="bg-bgTable mx-auto text-lightGray rounded-3xl h-auto "
          >
            <thead className="">
              <tr className="grid grid-cols-3">
                <th className="px-8 py-5">سطح کاربری</th>
                <th className="px-8 py-5">حجم معاملات</th>
                <th className="px-8 py-5">کارمزد</th>
              </tr>
            </thead>
            <tbody className="grid grid-cols-3">
              <tr className="grid grid-rows-4">
                <td className="px-8 py-5">سطح 1 </td>
                <td className="px-8 py-5">سطح 2 </td>
                <td className="px-8 py-5">سطح 3 </td>
                <td className="px-8 py-5">سطح 4 </td>
              </tr>
              <tr className="grid grid-rows-4">
                <td className="px-8 py-5  border">0 تا 30 میلیون </td>
                <td className="px-8 py-5 border">30 تا 60 میلیون </td>
                <td className="px-8 py-5 border">60 تا 90 میلیون </td>
                <td className="px-8 py-5 border">90 تا 120 میلیون </td>
              </tr>
              <tr className="grid grid-rows-4">
                <td className="px-8 py-5">0.0.3٪</td>
                <td className="px-8 py-5">0.06٪</td>
                <td className="px-8 py-5">0.09٪</td>
                <td className="px-8 py-5">0.12٪</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}
