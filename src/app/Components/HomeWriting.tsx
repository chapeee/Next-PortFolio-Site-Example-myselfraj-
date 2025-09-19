import React from "react";
import { getLatestPosts } from "../lib/sanity";
import Post from "./Post";

export default async function HomeWriting() {
  const data = await getLatestPosts();
  return (
    <div className="relative z-[9] w-full bg-transparent">
      <div className="container m-auto px-6 pt-[100px] pb-[40px] lg:max-w-[1100px]">
        <div className="rounded-[32px] border border-white/70 bg-white/80 p-8 shadow-2xl backdrop-blur">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-[30px]">
            <div className="lg:col-span-1">
              <h2 className="text-balance text-4xl md:text-4xl lg:text-5xl font-semibold mb-4 leading-[110%] md:leading-[140%] text-slate-900">
                Writings
              </h2>
              <p className="text-base text-slate-600 md:text-lg">
                Curated thoughts on technology, creativity and everything I am experimenting with lately.
              </p>
              <a href="/blog" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.35em] text-siteDefaultColor hover:text-siteDefaultColor/80">
                Read More Blogs
                <span aria-hidden="true">↗</span>
              </a>
            </div>
            <div className="lg:col-span-2">
              <div className="mt-0 pb-[40px]">
                {!data ? (
                  <p style={{ color: "red" }}>something went wrong</p>
                ) : (
                  <div className="text-black">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                      {data.map((post: any, index: number) => (
                        <div key={index}>
                          <Post post={post} />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
