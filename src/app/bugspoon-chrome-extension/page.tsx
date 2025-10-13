import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "🪱 BugSpoon – Chrome DevTools Extension",
  description:
    "BugSpoon captures every request in the page, enriches it with schema intelligence, security insights, CORS analysis, and powerful exports.",
};

export default function Page() {
  return (
    <div>
      {/* Page Intro (matches /projects spacing and sizing) */}
      <div className="w-full bg-gray-100 text-black pt-[50px] md:pt-[100px] sticky top-0 z-0">
        <div className="container p-5 m-auto max-w-[900px] text-center">
          <h2 className="pt-3 text-4xl md:text-4xl lg:text-5xl font-medium leading-[110%] md:leading-[140%]">
            BugSpoon – Network+ DevTools Extension
          </h2>
          <p className="text-[18px] mt-7">
            We document real stories through compelling API visuals. BugSpoon captures every request in the page, enriches it with schema intelligence, security insights, CORS analysis, and powerful exports.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com/chapeee/bugspoon-network-plus"
              target="_blank"
              className="text-[16px] bg-siteDefaultColor text-white p-2 pl-5 pr-5 rounded-full"
            >
              Install & Documentation
            </a>
            <a
              href="#comparison"
              className="text-[16px] bg-transparent text-gray-700 border-gray-300 border p-2 pl-5 pr-5 rounded-full"
            >
              See how we compare
            </a>
          </div>
        </div>
      </div>

      {/* Dark Section: Feature highlights */}
      <div className="w-full m-auto bg-gray-100 md:pt-[100px] pt-[50px]">
        <div className="z-[9] relative bg-gray-100">
          <div className="bg-gray-950 text-white pt-[100px] pb-[100px]">
            <div className="container m-auto p-5 pt-0 pb-0">
              <div className="flex lg:justify-between flex-col lg:flex-row">
                <div className="max-w-[750px]">
                  <span className="text-[18px] text-gray-400">Superpowers</span>
                  <div
                    className="text-4xl lg:text-[52px] font-medium text-left"
                    style={{ lineHeight: "120%" }}
                  >
                    Everything you wish the Network panel had:
                  </div>
                  <p className="mt-5 text-[18px] text-gray-300">
                    BugSpoon keeps the familiar request timeline but layers on automation, context, and collaboration features that turn network debugging into an insight engine.
                  </p>
                  <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="rounded-2xl border border-gray-800 bg-gray-900 p-6 shadow-lg">
                      <div className="text-[18px] text-gray-400">
                        Schema automation
                      </div>
                      <div className="text-[16px] pt-2 text-gray-200">
                        Generate JSON Schema and TypeScript types from any response, compare revisions, and explore visual schema history.
                      </div>
                    </div>
                    <div className="rounded-2xl border border-gray-800 bg-gray-900 p-6 shadow-lg">
                      <div className="text-[18px] text-gray-400">
                        Schema change alerts
                      </div>
                      <div className="text-[16px] pt-2 text-gray-200">
                        Trigger Chrome notifications when responses change shape so backend regressions surface instantly during feature work.
                      </div>
                    </div>
                    <div className="rounded-2xl border border-gray-800 bg-gray-900 p-6 shadow-lg">
                      <div className="text-[18px] text-gray-400">
                        Insightful exports
                      </div>
                      <div className="text-[16px] pt-2 text-gray-200">
                        Export to PDF, HTML, or sharable snippets, making it simple to communicate findings with anyone on your team.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap lg:flex-nowrap lg:flex-col flex-row lg:gap-0 gap-4 items-start lg:items-end lg:mt-0 mt-10">
                  <div className="text-[18px] bg-transparent text-gray-200 border-gray-200 border p-2 pl-5 pr-5 rounded-full">
                    Chrome DevTools
                  </div>
                  <div className="text-[18px] lg:mt-5 bg-transparent text-gray-200 border-gray-200 border p-2 pl-5 pr-5 rounded-full">
                    Network Panel+
                  </div>
                  <div className="text-[18px] lg:mt-5 bg-transparent text-gray-200 border-gray-200 border p-2 pl-5 pr-5 rounded-full">
                    JSON Schema
                  </div>
                  <div className="text-[18px] lg:mt-5 bg-transparent text-gray-200 border-gray-200 border p-2 pl-5 pr-5 rounded-full">
                    TypeScript
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Alternate Brand Color Section */}
      <div className="w-full m-auto bg-gray-100">
        <div className="z-[9] relative bg-gray-100">
          <div className="bg-[#0F084E] text-white pt-[100px] pb-[100px]">
            <div className="container m-auto p-5 pt-0 pb-0">
              <div className="flex lg:justify-between flex-col lg:flex-row">
                <div className="max-w-[750px]">
                  <span className="text-[18px] text-gray-400">Monitoring & Intelligence</span>
                  <div
                    className="text-4xl lg:text-[52px] font-medium text-left"
                    style={{ lineHeight: "120%" }}
                  >
                    Response Intelligence:
                  </div>
                  <p className="mt-5 text-[18px] text-gray-300">
                    Rapid previews, replay tooling, curated replays and export-ready snippets keep teammates aligned with shareable assets.
                  </p>
                  <div className="mt-14 max-w-[400px]">
                    <div className="mockup-code">
                      <pre data-prefix="$" className="text-warning">
                        <code>git clone https://github.com/chapeee/BugSpoon</code>
                      </pre>
                      <pre data-prefix=">">
                        <code>installing...</code>
                      </pre>
                      <pre data-prefix=">" className="text-success">
                        <code>Done ready to use!</code>
                      </pre>
                    </div>
                  </div>
                  <div className="mt-14">
                    <div className="flex gap-4 md:gap-11 flex-wrap">
                      <div>
                        <div className="text-[18px] text-gray-500">Project</div>
                        <a
                          href="https://github.com/chapeee/bugspoon-network-plus"
                          target="_blank"
                          className="text-[20px] pt-1 text-gray-100 underline"
                        >
                          BugSpoon
                        </a>
                      </div>
                      <div>
                        <div className="text-[18px] text-gray-500">Role</div>
                        <div className="text-[20px] pt-1 text-gray-100">Extension & DevTools</div>
                      </div>
                      <div>
                        <div className="text-[18px] text-gray-500">Date</div>
                        <div className="text-[20px] pt-1 text-gray-100">2024 - Present</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap lg:flex-nowrap lg:flex-col flex-row lg:gap-0 gap-4 items-start lg:items-end lg:mt-0 mt-10">
                  <div className="text-[18px] lg:mt-5 bg-transparent text-gray-200 border-gray-200 border p-2 pl-5 pr-5 rounded-full">
                    CORS Insights
                  </div>
                  <div className="text-[18px] bg-transparent text-gray-200 border-gray-200 border p-2 pl-5 pr-5 rounded-full">
                    Security Scans
                  </div>
                  <div className="text-[18px] lg:mt-5 bg-transparent text-gray-200 border-gray-200 border p-2 pl-5 pr-5 rounded-full">
                    Replay Tooling
                  </div>
                  <div className="text-[18px] lg:mt-5 bg-transparent text-gray-200 border-gray-200 border p-2 pl-5 pr-5 rounded-full">
                    Exports
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Workflow Section */}
      <div className="bg-[#d7eef0] z-[9] relative w-full md:pt-[120px] pt-[50px]"></div>
      <div className="z-[9] relative w-full m-auto bg-gray-100 pb-[50px]">
        <div className="bg-[#d7eef0] w-full h-[47em] sm:h-[48em] md:h-[46em] absolute"></div>
        <div className="z-[9] relative">
          <div className="text-black">
            <div className="container m-auto p-5 pt-0 pb-0">
              <div className="flex lg:justify-between flex-col lg:flex-row">
                <div className="max-w-[750px]">
                  <span className="text-[18px] text-gray-700">Workflow</span>
                  <div
                    className="text-4xl lg:text-[52px] font-medium text-left"
                    style={{ lineHeight: "120%" }}
                  >
                    Capture, enrich, and share in minutes:
                  </div>
                  <p className="mt-5 text-[18px] text-gray-600">
                    A purpose-built flow lets you capture requests, surface schema and security insights, collaborate with your team, and export polished documentation without leaving the panel.
                  </p>

                  <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
                    <div className="rounded-2xl border border-gray-300 bg-white p-6 shadow-lg">
                      <div className="text-[18px] text-gray-800">1. Capture instantly</div>
                      <div className="text-[16px] pt-2 text-gray-700">
                        Open the BugSpoon panel to watch every request populate with real-time performance data.
                      </div>
                    </div>
                    <div className="rounded-2xl border border-gray-300 bg-white p-6 shadow-lg">
                      <div className="text-[18px] text-gray-800">2. Enrich automatically</div>
                      <div className="text-[16px] pt-2 text-gray-700">
                        Schema intelligence, security scans, and CORS guidance activate without configuration.
                      </div>
                    </div>
                    <div className="rounded-2xl border border-gray-300 bg-white p-6 shadow-lg">
                      <div className="text-[18px] text-gray-800">3. Share effortlessly</div>
                      <div className="text-[16px] pt-2 text-gray-700">
                        Export annotated captures and share confident recommendations with teammates and clients.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap lg:flex-nowrap lg:flex-col flex-row lg:gap-0 gap-4 items-start lg:items-end lg:mt-0 mt-10">
                  <div className="text-[18px] bg-transparent text-gray-700 border-gray-400 border p-2 pl-5 pr-5 rounded-full">
                    Team Collaboration
                  </div>
                  <div className="text-[18px] lg:mt-5 bg-transparent text-gray-700 border-gray-400 border p-2 pl-5 pr-5 rounded-full">
                    Documentation
                  </div>
                  <div className="text-[18px] lg:mt-5 bg-transparent text-gray-700 border-gray-400 border p-2 pl-5 pr-5 rounded-full">
                    Exports
                  </div>
                  <div className="text-[18px] lg:mt-5 bg-transparent text-gray-700 border-gray-400 border p-2 pl-5 pr-5 rounded-full">
                    Confidence
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Comparison Section */}
      <div id="comparison" className="z-[9] relative bg-gray-100">
        <div className="bg-white text-black pt-[60px] pb-[80px]">
          <div className="container m-auto p-5 pt-0 pb-0">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <div className="space-y-6 rounded-3xl border border-gray-300 bg-white p-8 shadow-lg">
                <h4 className="text-lg font-semibold text-gray-800">BugSpoon</h4>
                <ul className="space-y-4 text-sm text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-gray-500"></span>
                    Schema awareness, change detection, and TypeScript generation.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-gray-500"></span>
                    Security analysis for secrets, tokens, and risky CORS headers.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-gray-500"></span>
                    Export-ready documentation and shareable cURL, fetch, and PDF outputs.
                  </li>
                </ul>
              </div>
              <div className="space-y-6 rounded-3xl border border-gray-200 bg-gray-50 p-8 shadow-inner">
                <h4 className="text-lg font-semibold text-gray-600">
                  Chrome DevTools Network
                </h4>
                <ul className="space-y-4 text-sm text-gray-600">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-gray-300"></span>
                    Manual diffing of JSON payloads with no schema tracking.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-gray-300"></span>
                    No automated security scanning or CORS guidance.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-gray-300"></span>
                    Sharing requires copy-pasting raw payloads or screenshots.
                  </li>
                </ul>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-12 flex flex-wrap gap-4 justify-center">
              <a
                href="https://github.com/chapeee/bugspoon-network-plus"
                target="_blank"
                className="text-[16px] bg-siteDefaultColor text-white p-2 pl-5 pr-5 rounded-full"
              >
                Install & Docs
              </a>
              <a
                href="mailto:hello@bugspoon.dev"
                className="text-[16px] bg-transparent text-gray-700 border-gray-300 border p-2 pl-5 pr-5 rounded-full"
              >
                Book a walkthrough
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
