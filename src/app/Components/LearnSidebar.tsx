import React from "react";
import { getLearnTitle } from "../lib/sanity";
import Link from "next/link";
export default async function LearnSidebar() {
  const data = await getLearnTitle();

  return (
    
        <div className="drawer lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col items-center justify-center">
            <label
              htmlFor="my-drawer-2"
              className="btn bg-primary text-white drawer-button lg:hidden"
            >
              Topics
            </label>
          </div>
          <div className="drawer-side  top-[86px] md:top-[85px]">
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            {data.map((learn: any, index: number) => (
              <div className="mt-5 mb-5  rounded-xl p-4 w-80 min-h-[500px] overflow-x-hidden overflow-y-auto scroll-behavior-smooth bg-gray-100 text-base-content">
                <span key={index}>
                  <Link
                    className="text-black cursor-pointer  w-full hover:underline text-[17px]"
                    data-id={learn.slug.current}
                    href={"/learn/" + learn.slug.current}
                  >
                    <div className="w-full m-0 p-1 whitespace-nowrap overflow-hidden overflow-ellipsis">
                      {learn.title}
                    </div>
                  </Link>
                </span>
              </div>
            ))}
          </div>
        </div>
    
  );
}
