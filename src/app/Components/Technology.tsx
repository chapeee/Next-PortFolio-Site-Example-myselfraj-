import React from "react";

export default function Technology() {
  return (
    <div className="relative z-[999] w-full bg-gradient-to-br from-siteDefaultColor via-[#0b8590] to-[#053f55] text-white lg:min-h-[100vh] xl:min-h-[100%]">
      <div className="container m-auto px-6 py-[100px]">
        <div>
          <h2 className="text-balance text-4xl md:text-4xl lg:text-6xl font-semibold leading-[120%] md:mb-10 max-w-[820px]">
            Technology: The technology I work on is cutting-edge and innovative
          </h2>
        </div>
        <div className="mt-[70px] space-y-16">
          <div>
            <h2 className="text-3xl font-semibold mb-6">Back-End Tools</h2>
            <div className="flex flex-wrap gap-4 md:gap-6 text-[18px]">
              {['Php','CI','Laravel','Core Php','Node Js','Express Js','Python'].map((item) => (
                <div key={item} className="rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em]">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-semibold mb-6">Front-End and Css Tools</h2>
            <div className="flex flex-wrap gap-4 md:gap-6 text-[18px]">
              {['Vue','Nuxt','React','Next','Vanilla','Ionic','Bs','Tailwind'].map((item) => (
                <div key={item} className="rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em]">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-semibold mb-6">Cloud & Hosting</h2>
            <div className="flex flex-wrap gap-4 md:gap-6 text-[18px]">
              {['Firebase','AWS','Cloudflare','Netify','Vercel','Google'].map((item) => (
                <div key={item} className="rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em]">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-semibold mb-6">CMS Tools</h2>
            <div className="flex flex-wrap gap-4 md:gap-6 text-[18px]">
              {['Wordpress','Strapi'].map((item) => (
                <div key={item} className="rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em]">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
