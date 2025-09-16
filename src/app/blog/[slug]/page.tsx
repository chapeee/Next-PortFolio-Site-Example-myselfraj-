import { getPostBySlug } from "../../lib/sanity";
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
  const data: any = await getPostBySlug(params.slug);

  return (
    <div>
      <div className="w-full blog-page-myselfraj bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white pt-[50px] md:pt-[100px] pb-[50px] md:pb-[100px] relative overflow-hidden">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-secondary/5 to-tertiary/5"></div>
        
        <h2 className="max-w-[1000px] m-auto pt-3 text-4xl md:text-4xl lg:text-6xl font-medium leading-[120%] md:leading-[140%] text-center bg-gradient-to-r from-white via-gray-200 to-accent bg-clip-text text-transparent relative z-10">
          {data?.title}
        </h2>
        <div className="container p-9 pt-0 m-auto text-center max-w-[900px] relative z-10">
          {!data ? (
            <div>
              <p className="text-4xl md:text-6xl text-gray-400 min-h-[70vh]">
                Oops you landed on the Mars.
              </p>
              <p className="text-[15px] text-gray-500">404 Page Not Found</p>
            </div>
          ) : (
            <div>
              <div className="mt-0 mb-14">
                {data?.image?.asset?._ref && (
                  <Image
                    id="leftImage"
                    src={urlFor(data?.image?.asset?._ref)
                      .width(900)
                      .quality(80)
                      .url()}
                    alt={data?.title}
                    width={0}
                    sizes="100vw"
                    height={300}
                    className="mt-[50px] md:mt-[100px] border-2 border-gray-700 hover:border-accent transition-all duration-300 shadow-xl shadow-accent/20"
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                    loading="lazy"
                  />
                )}
              </div>
              <div className="mt-10 text-gray-300 max-w-[900px] m-auto text-left text-[20px] leading-relaxed">
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
  );
}
