import React from "react";
import { getLatestPosts } from '../lib/sanity'
import Post from "./Post";

export default async function HomeWriting() {
  const data = await getLatestPosts()
  return (
    <div className="w-full z-[9] bg-gray-100 relative">
      <div className="container p-5 m-auto pt-[100px] pb-[0] lg:max-w-[1000px]">
        <div className="grid grid-cols-3 lg:gap-[30px]">
          <div className="col-span-1">
            <h2 className="text-4xl md:text-4xl lg:text-5xl font-medium mb-6 leading-[110%] md:leading-[140%]">
              Writings:
            </h2>
            <a href="/writings" className="text-[18px] pt-10">
              <u>Read More</u>
            </a>
          </div>
          <div className="col-span-3">
            <div className='mt-[0px] pb-[100px]'>

              {!data ? (
                <p style={{ color: 'red' }}>something went wrong</p>
              ) : (
                <div className='text-black'>

                  <div className="grid grid-cols-1 md:grid-cols-2 md:gap-[40px] gap-7 mt-0">
                    {data.map((post: any, index: number) => (

                      <div key={index} className='mt-5'>
                        
                        <Post post={post} />
                      </div>
                    )
                    )}</div>

                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
