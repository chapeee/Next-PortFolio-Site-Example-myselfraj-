
import { getPostBySlug } from '../../lib/sanity';
import { PortableText } from '@portabletext/react';
import { Metadata } from "next";
import Image from "next/image";
import imageUrlBuilder from '@sanity/image-url'
import sanityclient from '../../lib/createClient'

const builder = imageUrlBuilder(sanityclient)
function urlFor(source: any) {
  return builder.image(source)
}

type Props = {
  params: { slug: string };
};

export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `${(params.slug.replace(/-/g, ' '))}`,
  };
};


export default async function Page({ params }: { params: { slug: string } }) {
  
  const data: any = await getPostBySlug(params.slug);
 
  return (
    <div>
     
      <div className="w-full bg-gray-100 text-black pt-[50px] md:pt-[100px] pb-[50px] md:pb-[100px]">
        <div className="container p-5 m-auto text-center">
          {!data ? (
            <div >
                   <p className='text-4xl md:text-6xl text-gray-700 min-h-[70vh]'>Oops you landed on the Mars.</p>
            <p className='text-[15px]'>404 Page Not Found</p>
            </div>
       
          ) : (
            <div>
              <h2 className="max-w-[1000px] m-auto pt-3 text-4xl md:text-4xl lg:text-6xl font-medium leading-[120%] md:leading-[140%]">
                {data?.title}
              </h2>
              <div className="mt-14 mb-14">
              {data?.image?.asset?._ref && (
                            <Image
                              id="leftImage"
                              src={urlFor((data?.image?.asset?._ref)).width(1200).quality(80).url()}
                              alt={data?.title}
                              width={0}
                              sizes="100vw"
                              height={300}
                              className="mt-[50px] md:mt-[100px]  "
                              style={{
                                width: "100%",
                                height: "650px",
                                objectFit: "cover",
                                borderRadius: "8px",
                              }}
                              loading="lazy"
                            />
                          )}
              </div>
              <div className="mt-10 text-gray-600 max-w-[900px] m-auto text-[20px]">
                <PortableText value={data.body} />
                {data?.body.map((block: any) => (
                  <p key={block._key}>{block.children.map((child: any) => child.text).join(' ')}</p>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

