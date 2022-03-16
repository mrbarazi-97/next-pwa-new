//import data from '../utils/data';
import { Layout } from '../components';
import { data } from '../utils/data';
import Image from 'next/image';

export default function roles() {
  return (
    <Layout>
      <div dir="rtl" className="bg-darkBlue">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-white text-center text-2xl font-extrabold py-5">
            قوانین
          </h1>
          <div className="px-2">
            {data.roles.map((items) => (
              <section key={items.id}>
                <div className="flex flex-row items-center">
                  <Image
                    src={items.imageUrl}
                    width={35}
                    height={35}
                    alt={items.title}
                  />
                  <h1 className="text-white text-xl px-5 font-bold">
                    {items.title}
                  </h1>
                </div>
                <div className="text-white m-12 flex flex-col content-around">
                  <div className="flex flex-row items-start ">
                    <span className="p-0.5 mt-1 rounded-full bg-white"></span>
                    <p className="text-xs pr-2 lg:text-sm">
                      {items.paragraph_1}
                    </p>
                  </div>
                  <div className="flex flex-row items-start ">
                    <span className="p-0.5 mt-1 rounded-full bg-white"></span>
                    <p className="text-xs pr-2 lg:text-sm">
                      {items.paragraph_2}
                    </p>
                  </div>
                  <div className="flex flex-row items-start ">
                    <span className="p-0.5 mt-1 rounded-full bg-white"></span>
                    <p className="text-xs pr-2 lg:text-sm">
                      {items.paragraph_3}
                    </p>
                  </div>
                  <div className="flex flex-row items-start ">
                    <span className="p-0.5 mt-1 rounded-full bg-white"></span>
                    <p className="text-xs pr-2 lg:text-sm">
                      {items.paragraph_4}
                    </p>
                  </div>
                  <div className="flex flex-row items-start ">
                    <span className="p-0.5 mt-1 rounded-full bg-white"></span>
                    <p className="text-xs pr-2 lg:text-sm">
                      {items.paragraph_5}
                    </p>
                  </div>
                  <div className="flex flex-row items-start ">
                    <span className="p-0.5 mt-1 rounded-full bg-white"></span>
                    <p className="text-xs pr-2 lg:text-sm">
                      {items.paragraph_6}
                    </p>
                  </div>
                  <div className="flex flex-row items-start ">
                    <span className="p-0.5 mt-1 rounded-full bg-white"></span>
                    <p className="text-xs pr-2 lg:text-sm">
                      {items.paragraph_7}
                    </p>
                  </div>
                  <div className="flex flex-row items-start ">
                    <span className="p-0.5 mt-1 rounded-full bg-white"></span>
                    <p className="text-xs pr-2 lg:text-sm">
                      {items.paragraph_8}
                    </p>
                  </div>
                  <div className="flex flex-row items-start ">
                    <span className="p-0.5 mt-1 rounded-full bg-white"></span>
                    <p className="text-xs pr-2 lg:text-sm">
                      {items.paragraph_9}
                    </p>
                  </div>
                  <div className="flex flex-row items-start ">
                    <span className="p-0.5 mt-1 rounded-full bg-white"></span>
                    <p className="text-xs pr-2 lg:text-sm">
                      {items.paragraph_10}
                    </p>
                  </div>
                  <div className="flex flex-row items-start ">
                    <span className="p-0.5 mt-1 rounded-full bg-white"></span>
                    <p className="text-xs pr-2 lg:text-sm">
                      {items.paragraph_11}
                    </p>
                  </div>
                  <div className="flex flex-row items-start ">
                    <span className="p-0.5 mt-1 rounded-full bg-white"></span>
                    <p className="text-xs pr-2 lg:text-sm">
                      {items.paragraph_12}
                    </p>
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
