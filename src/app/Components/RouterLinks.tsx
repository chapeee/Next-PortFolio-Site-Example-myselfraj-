import React from "react";
import IsLinkActive from "../lib/CommonMethods";

import { usePathname } from "next/navigation";
export default function RouterLinks() {
  return (
    <div>
      <ul className="font-medium text-[18px] flex flex-col gap-2 p-4 md:p-0 mt-4 rounded-2xl bg-white/90 shadow-lg lg:flex-row lg:items-center lg:gap-6 rtl:space-x-reverse lg:mt-0 lg:bg-transparent lg:shadow-none">
        <li>
          <a
            href="/about"
            className={`block px-4 py-2 rounded-full transition-all duration-200 ${
              IsLinkActive("/about")
                ? "bg-white text-siteDefaultColor shadow-sm"
                : "text-slate-600 hover:text-siteDefaultColor hover:bg-white/70"
            }`}
          >
            About Me
          </a>
        </li>
        <li>
          <a
            href="/learn"
            className={`block px-4 py-2 rounded-full transition-all duration-200 ${
              IsLinkActive("/learn")
                ? "bg-white text-siteDefaultColor shadow-sm"
                : "text-slate-600 hover:text-siteDefaultColor hover:bg-white/70"
            }`}
          >
            Learn
          </a>
        </li>
        <li>
          <a
            href="/projects"
            className={`block px-4 py-2 rounded-full transition-all duration-200 ${
              IsLinkActive("/projects")
                ? "bg-white text-siteDefaultColor shadow-sm"
                : "text-slate-600 hover:text-siteDefaultColor hover:bg-white/70"
            }`}
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="/blog"
            className={`block px-4 py-2 rounded-full transition-all duration-200 ${
              IsLinkActive("/blog")
                ? "bg-white text-siteDefaultColor shadow-sm"
                : "text-slate-600 hover:text-siteDefaultColor hover:bg-white/70"
            }`}
          >
            My Writings
          </a>
        </li>

        <li>
          <a
            href="/dictionary"
            className={`block px-4 py-2 rounded-full transition-all duration-200 ${
              IsLinkActive("/dictionary")
                ? "bg-white text-siteDefaultColor shadow-sm"
                : "text-slate-600 hover:text-siteDefaultColor hover:bg-white/70"
            }`}
          >
         Code Dictionary
          </a>
        </li>

        <li>
          <a
            target="blank"
            href="https://calendly.com/myselfraj/30min"
            className="block px-5 py-2 text-white bg-gradient-to-r from-siteDefaultColor to-[#0aa0a4] rounded-full border border-transparent shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
          >
            Lets Chat
          </a>
        </li>
      </ul>
    </div>
  );
}
