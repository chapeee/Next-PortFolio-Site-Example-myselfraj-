import React from 'react'


export default function CompaniesIhaveWorked() {
  return (
    <div>
         <div className="container m-auto text-center">
          <div className="rounded-[32px] border border-white/70 bg-white/80 p-10 shadow-2xl backdrop-blur">
            <h2 className="text-balance text-4xl md:text-5xl font-semibold text-slate-900 mb-10">
              Companies I have worked with
            </h2>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-[16px] font-semibold text-slate-600">
              {[
                "Jeff.co",
                "Karat.io",
                "Mithi.com",
                "Petofy",
                "Cynotech",
                "Fusioni Tech",
                "Rosewood Publications",
                "Choreless",
                "Mithi",
                "Marketing Crawlers",
                "PRM Digital",
                "TrueDreamster Publications",
                "LegacyFlow",
                "Wibyng",
                "Kapiva",
                "Fm1",
                "Dreamershelf Publications",
                "The Fold",
                "Wapka",
                "Educrafter Education",
                "Rayforce Greentech",
                "HaitinFlix",
                "Motosports",
                "JFlex",
              ].map((company) => (
                <span
                  key={company}
                  className="rounded-full border border-slate-200/70 bg-white/80 px-5 py-2 text-sm uppercase tracking-[0.2em] shadow-sm"
                >
                  {company}
                </span>
              ))}
            </div>
          </div>
        </div>
    </div>
  )
}