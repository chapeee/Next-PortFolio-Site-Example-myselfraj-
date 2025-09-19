"use client"
import React from 'react'
import Image from "next/image";

import { usePathname  } from 'next/navigation';
import RouterLinks from './RouterLinks';

export default function Header() {
    const IsLinkActive = (href : any) => {
      return usePathname() === href;
    };
  return (
    <div className=' sticky z-[999] top-[0px]'>
         <nav className="border-b border-white/60 bg-white/80 backdrop-blur-xl shadow-sm transition-all">
          <div className="container flex flex-wrap items-center justify-between mx-auto px-4 py-4 md:py-5">
            <a
              href="/"
              className={`flex items-center rtl:space-x-reverse text-3xl font-bold italic border-2 rounded-full px-2 py-2 shadow-sm transition-all duration-300 ${
                IsLinkActive('/') ? ' border-siteDefaultColor text-siteDefaultColor' : 'border-white/70 text-slate-900'
              }`}
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
            <div className="dropdown dropdown-end sm:block block lg:hidden dropdown-hover">
  <div tabIndex={0} role="button" className="btn bg-white/80 border border-white/80 shadow-sm"><svg style={{width:"15px"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg></div>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-3 shadow-xl bg-white/90 backdrop-blur-xl rounded-2xl w-52">
<RouterLinks />
  </ul>
</div>
            <div
              className="hidden w-full lg:block md:w-auto"
              id="navbar-default"
            >
              <RouterLinks />
            </div>
          </div>
        </nav>
    </div>
  )
}