import { Fragment } from 'react';
import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

import Image from 'next/image';
import Link from 'next/link';

const navigation = [
  { name: 'بازار', href: '#', current: false },
  { name: 'قوانین', href: '#', current: false },
  { name: 'کارمزد ها', href: '#', current: false },
  { name: 'سطوح کاربری', href: '#', current: false },
  { name: 'مجله', href: '#', current: false },
  { name: 'درباره ما', href: '#', current: false },
  { name: 'تماس با ما', href: '#', current: false },
  { name: 'دانلود', href: '#', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export function Header() {
  return (
    <Disclosure as="nav" className="bg-darkBlue text-lightGray">
      {({ open }) => (
        <>
          <div dir="rtl" className="lg:max-w-6xl mx-auto px-2 sm:px-6">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className=" inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-between sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <Image
                    src="/assets/images/logo/raybit-logo.svg"
                    height={40}
                    width={40}
                    alt="raybit-main-logo"
                  />
                  <h2 className="px-3 text-2xl font-extrabold">رای بیت</h2>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={'px-3 py-2 text-lg font-medium'}
                      >
                        <a>{item.name}</a>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={
                    'block px-3 py-2  text-lg font-medium items-center'
                  }
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
