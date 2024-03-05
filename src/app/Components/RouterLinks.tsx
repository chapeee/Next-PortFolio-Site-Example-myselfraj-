import React from "react";
import IsLinkActive from "../lib/CommonMethods";

import { usePathname } from "next/navigation";
export default function RouterLinks() {
  return (
    <div>
      <ul className="font-medium text-[18px] flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-100 lg:flex-row lg:space-x-8 rtl:space-x-reverse lg:mt-0 md:border-0 bg-transparent  ">
        <li>
          <a
            href="/about"
            className={`block py-2 px-3 text-gray-700 hover:bg-gray-100  border-b-2 hover:border-siteDefaultColor hover:text-siteDefaultColor ${
              IsLinkActive("/about")
                ? " border-[#09757a]  font-bold text-siteDefaultColor"
                : "border-transparent "
            }`}
          >
            About Me
          </a>
        </li>
        <li>
          <a
            href="/learn"
            className={`block py-2 px-3 text-gray-700 hover:bg-gray-100  border-b-2 hover:border-siteDefaultColor hover:text-siteDefaultColor ${
              IsLinkActive("/learn")
                ? " border-[#09757a] font-bold text-siteDefaultColor"
                : "border-transparent "
            }`}
          >
            Learn
          </a>
        </li>
        <li>
          <a
            href="/projects"
            className={`block py-2 px-3 text-gray-700  hover:bg-gray-100  border-b-2 hover:border-siteDefaultColor hover:text-siteDefaultColor ${
              IsLinkActive("/projects")
                ? " border-[#09757a] font-bold text-siteDefaultColor"
                : "border-transparent"
            }`}
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="/blog"
            className={`block py-2 px-3 text-gray-700  hover:bg-gray-100  border-b-2 hover:border-siteDefaultColor hover:text-siteDefaultColor ${
              IsLinkActive("/blog")
                ? " border-[#09757a] font-bold text-siteDefaultColor"
                : "border-transparent"
            }`}
          >
            My Writings
          </a>
        </li>

        <li>
          <a
            href="/dictionary"
            className={`block py-2 px-3 text-gray-700  hover:bg-gray-100  border-b-2 hover:border-siteDefaultColor hover:text-siteDefaultColor ${
              IsLinkActive("/dictionary")
                ? " border-[#09757a] font-bold text-siteDefaultColor"
                : "border-transparent"
            }`}
          >
         Code Dictionary
          </a>
        </li>

        <li>
          <a
            target="blank"
            href="https://calendly.com/myselfraj/30min"
            className="block py-2 px-3  text-white bg-siteDefaultColor rounded-full pl-4 pr-4 border border-b-1 hover:border hover:border-b-1 hover:border-siteDefaultColor hover:bg-white hover:text-siteDefaultColor"
          >
            Lets Chat
          </a>
        </li>
      </ul>
    </div>
  );
}
