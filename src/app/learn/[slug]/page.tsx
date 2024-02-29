import LearnSidebar from "@/app/Components/LearnSidebar";
import React from "react";

import { getLearnSlug } from "../../lib/sanity";
import { PortableText } from "@portabletext/react";
import { Metadata } from "next";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import sanityclient from "../../lib/createClient";
import BlockContent from "@sanity/block-content-to-react";
import serializers from "../../lib/SanitySerializers";
const builder = imageUrlBuilder(sanityclient);
function urlFor(source: any) {
  return builder.image(source);
}

type Props = {
  params: { slug: string };
};

export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `${params.slug.replace(/-/g, " ")}`,
  };
};

export default async function Page({ params }: { params: { slug: string } }) {
  const data: any = await getLearnSlug(params.slug);

  return (
    <div className="w-full bg-slate-200">
      <div className="container m-auto  text-black pt-[50px] md:pt-[100px] ">
        <div className=" p-5 m-auto ">
          <div className="flex">
            <div className="fixed">
              {" "}
              <LearnSidebar />
            </div>
            <div className="md:ml-0 lg:ml-[360px]">
              <div>
                <div className="w-full p-10 pt-0 blog-page-myselfraj text-black ">
                  <h2 className="text-siteDefaultColor font-medium m-auto pt-3 text-4xl md:text-3xl lg:text-6xl leading-[120%] md:leading-[140%] text-left">
                    {data?.title}
                  </h2>

                  <div className="">
                    {!data ? (
                      <div>
                        <p className="text-4xl md:text-6xl text-gray-700 min-h-[70vh]">
                          Oops you landed on the Mars.
                        </p>
                        <p className="text-[15px]">404 Page Not Found</p>
                      </div>
                    ) : (
                      <div>
                        <div className="mt-10 text-gray-600 text-left text-[20px]">
                          <BlockContent
                            blocks={data.body}
                            projectId="1vkh2vq0"
                            dataset="production"
                            serializers={serializers}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
