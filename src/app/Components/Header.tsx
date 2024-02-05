"use client"
import React from 'react'
import Image from "next/image";

import { usePathname  } from 'next/navigation';

export default function Header() {
    const isLinkActive = (href : any) => {
      return usePathname() === href;
    };
  return (
    <div className=' sticky z-[999] top-[0px]'>
         <nav className="bg-gray-100 border-gray-200">
          <div className="container flex flex-wrap items-center justify-between mx-auto p-4">
            <a
              href="/"
              className="flex items-center  rtl:space-x-reverse font-italic text-italic text-3xl font-bold italic  border-siteDefaultColor border-4 rounded-full"
            >
              <Image
                src="https://ik.imagekit.io/mq90sdk8y/myselfraj/rajneesh.jpeg?updatedAt=1707033590888"
                alt="Writings"
                width={0}
                sizes="100vw"
                height={300}
                style={{
                  width: "46px",
                  height: "46px",
                  objectFit: "contain",
                  borderRadius: "100px",
                }}
                className="rounded-"
                loading="lazy"
              />
            </a>
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 "
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
            </button>
            <div
              className="hidden w-full md:block md:w-auto"
              id="navbar-default"
            >
              <ul className="font-medium text-[18px] flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-100 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 bg-transparent  ">
                <li>
                <a
                  href="/about"
                  className={`block py-2 px-3 text-gray-700 hover:bg-gray-100  border-b-2 hover:border-siteDefaultColor hover:text-siteDefaultColor ${
                    isLinkActive('/about') ? ' border-[#09757a]  font-bold text-siteDefaultColor' : 'border-transparent '
                  }`}
                >
                    About Me
                  </a>
                </li>
                <li>
                <a
                  href="/learn"
                  className={`block py-2 px-3 text-gray-700 hover:bg-gray-100  border-b-2 hover:border-siteDefaultColor hover:text-siteDefaultColor ${
                    isLinkActive('/learn') ? ' border-[#09757a] font-bold text-siteDefaultColor' : 'border-transparent '
                  }`}
                >
                    Learn
                  </a>
                </li>
                <li>
                <a
                  href="/projects"
                  className={`block py-2 px-3 text-gray-700  hover:bg-gray-100  border-b-2 hover:border-siteDefaultColor hover:text-siteDefaultColor ${
                    isLinkActive('/projects') ? ' border-[#09757a] font-bold text-siteDefaultColor' : 'border-transparent'
                  }`}
                >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 text-gray-700 hover:bg-gray-100 border-b-2 border-transparent hover:border-siteDefaultColor hover:text-siteDefaultColor "
                  >
                    Writings
                  </a>
                </li>
                
                <li>
                  <a target='blank'
                    href="https://calendly.com/myselfraj/30min"
                    className="block py-2 px-3  text-white bg-siteDefaultColor rounded-full pl-4 pr-4 border border-b-1 hover:border hover:border-b-1 hover:border-siteDefaultColor hover:bg-white hover:text-siteDefaultColor"
                  >
                   Lets Chat
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    </div>
  )
}