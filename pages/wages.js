import { Layout } from '../components';

export default function wages() {
  return (
    <Layout>
      <div className="bg-darkBlue h-auto bg-[url('/assets/images/background/wages__background.svg')]">
        <div className="max-w-6xl mx-auto px-3 flex flex-col text-center ">
          <h1 className="text-white text-3xl font-bold py-10">کارمزد ها</h1>
          <p className="text-white">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی
            در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را
            می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
            الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
          </p>
          <table dir="rtl" className="bg-bgTable mx-auto text-lightGray">
            <thead className="">
              <tr className="grid grid-cols-3 divide-x h-16">
                <th className="">سطح کاربری</th>
                <th className="">حجم معاملات</th>
                <th className="">کارمزد</th>
              </tr>
            </thead>
            <tbody className="grid grid-cols-3">
              <th className="grid grid-rows-4">
                <tr>سطح 1 </tr>
                <tr>سطح 2 </tr>
                <tr>سطح 3 </tr>
                <tr>سطح 4 </tr>
              </th>
              <th className="grid grid-rows-4">
                <tr>0 تا 30 میلیون </tr>
                <tr>30 تا 60 میلیون </tr>
                <tr>60 تا 90 میلیون </tr>
                <tr>90 تا 120 میلیون </tr>
              </th>
              <th className="grid grid-rows-4">
                <tr>0.0.3٪</tr>
                <tr>0.06٪</tr>
                <tr>0.09٪</tr>
                <tr>0.12٪</tr>
              </th>
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}
