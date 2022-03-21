import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import Link from 'next/link';
import { Logo } from '..';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div dir="rtl">
      <nav className="bg-darkBlue max-w-full">
        <div className="mx-auto max-w-6xl ">
          <div className="flex items-center h-15">
            <div className="flex items-center  text-lightGray">
              <div className="flex justify-center items-center p-5">
                <Link href="/" passHref>
                  <h1 className=" font-bold text-xl cursor-pointer flex flex-row items-center text-center ">
                    <Logo height={35} width={35} />
                    <span className="px-2 text-2xl font-bold"> رای بیت</span>
                  </h1>
                </Link>
              </div>
              <div className="hidden  md:block">
                <div className="flex items-baseline space-x-6 text-lightGray ">
                  <div className="cursor-pointer font-medium px-5 py-2 text-sm">
                    <Link
                      activeClass="market"
                      href="/market"
                      smooth={true}
                      offset={50}
                      duration={500}
                    >
                      <a>بازار</a>
                    </Link>
                  </div>
                  <div className="cursor-pointer font-medium px-1 py-2 text-sm">
                    <Link
                      activeClass="roles"
                      href="/roles"
                      smooth={true}
                      offset={50}
                      duration={500}
                    >
                      <a>قوانین</a>
                    </Link>
                  </div>
                  <div className="cursor-pointer font-medium px-1 py-2 text-sm">
                    <Link
                      activeClass="wages"
                      href="/wages"
                      smooth={true}
                      offset={50}
                      duration={500}
                    >
                      <a>کارمزد ها</a>
                    </Link>
                  </div>
                  <div className="cursor-pointer font-medium px-1 py-2 text-sm">
                    <Link
                      activeClass="userlevel"
                      href="/userlevel"
                      smooth={true}
                      offset={50}
                      duration={500}
                    >
                      <a> سطوح کاربری</a>
                    </Link>
                  </div>
                  <div className="cursor-pointer font-medium px-1 py-2 text-sm">
                    <Link
                      activeClass="mags"
                      href="/userlevel"
                      smooth={true}
                      offset={50}
                      duration={500}
                    >
                      <a>مجله</a>
                    </Link>
                  </div>
                  <div className="cursor-pointer font-medium px-1 py-2 text-sm">
                    <Link
                      activeClass="about"
                      href="/about"
                      smooth={true}
                      offset={50}
                      duration={500}
                    >
                      <a>درباره ما</a>
                    </Link>
                  </div>
                  <div className="cursor-pointer font-medium px-1 py-2 text-sm">
                    <Link
                      activeClass="about"
                      href="/about"
                      smooth={true}
                      offset={50}
                      duration={500}
                    >
                      <a>تماس ما</a>
                    </Link>
                  </div>
                  <div className="cursor-pointer font-medium px-1 py-2 text-sm">
                    <Link
                      activeClass="download"
                      href="/download"
                      smooth={true}
                      offset={50}
                      duration={500}
                    >
                      <a>دانلود</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:hidden mr-auto ">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex pl-2 pb-5 text-mainBlue"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                {!isOpen ? (
                  <svg
                    className="block h-10 w-14"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 10"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-10 w-14 pt-1"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100 "
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden " id="mobile-menu">
              <div
                ref={ref}
                className="bg-darkBlue w-full absolute p-3 space-y-3  text-center items-center h-full flex flex-col text-lightGray"
              >
                <div className="cursor-pointer p-1 rounded-md text-2xl">
                  <Link
                    href="/market"
                    activeClass="market"
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    <a>بازار</a>
                  </Link>
                </div>
                <div className="cursor-pointer p-1 rounded-md text-2xl">
                  <Link
                    href="/roles"
                    activeClass="roles"
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    <a>قوانین</a>
                  </Link>
                </div>
                <div className="cursor-pointer p-1 rounded-md text-2xl">
                  <Link
                    href="/wages"
                    activeClass="wages"
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    <a> کارمزد ها</a>
                  </Link>
                </div>
                <div className="cursor-pointer p-1 rounded-md text-2xl">
                  <Link
                    href="/userlevel"
                    activeClass="userlevel"
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    <a>سطوح کاربری</a>
                  </Link>
                </div>
                <div className="cursor-pointer p-1 rounded-md text-2xl">
                  <Link
                    href="/mags"
                    activeClass="mags"
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    <a> مجله</a>
                  </Link>
                </div>
                <div className="cursor-pointer p-1 rounded-md text-2xl">
                  <Link
                    href="/about"
                    activeClass="about"
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    <a> درباره ما</a>
                  </Link>
                </div>
                <div className="cursor-pointer p-1 rounded-md text-2xl">
                  <Link
                    href="/contact"
                    activeClass="contact"
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    <a> تماس با ما</a>
                  </Link>
                </div>
                <div className="cursor-pointer p-1 rounded-md text-2xl">
                  <Link
                    href="/download"
                    activeClass="download"
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    <a>دانلود</a>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}
