"use client"
import React, { useState, useEffect } from "react";
import { getLatestPosts } from "../lib/sanity";
import Post from "./Post";

export default function HomeWriting() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const posts = await getLatestPosts();
        setData(posts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="w-full z-[9] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-secondary/5 to-tertiary/5"></div>
      
      <div className="container p-5 m-auto pt-[100px] pb-[0] lg:max-w-[1000px] relative z-10">
        <div className="grid grid-cols-3 lg:gap-[30px]">
          <div className="col-span-1">
            <h2 className="text-4xl md:text-4xl lg:text-5xl font-medium mb-6 leading-[110%] md:leading-[140%] text-gray-100 bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
              Writings:
            </h2>
            <a href="/blog" className="text-[18px] pt-10 text-gray-300 hover:text-accent transition-colors duration-300 group">
              <u className="group-hover:decoration-accent">Read More Blogs</u>
            </a>
          </div>
          <div className="col-span-3">
            <div className="mt-[0px] pb-[100px]">
              {loading ? (
                <div className="flex justify-center items-center h-32">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-accent"></div>
                </div>
              ) : !data ? (
                <p className="text-red-400">Something went wrong</p>
              ) : (
                <div className="text-gray-100">
                  <div className="grid grid-cols-1 md:grid-cols-2 md:gap-[40px] gap-7 mt-0">
                    {data.map((post: any, index: number) => (
                      <div key={index} className="mt-5 transform hover:scale-105 transition-transform duration-300">
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
  );
}
