
import { getPosts } from '../lib/sanity'
import imageUrlBuilder from '@sanity/image-url'
import sanityclient from '../lib/createClient'
import Image from "next/image";

const builder = imageUrlBuilder(sanityclient)
function urlFor(source: any) {
  return builder.image(source)
}

export default async function Writing() {
  const data = await getPosts()

  return (

    <main>
      <div className="w-full bg-gray-100 text-black pt-[50px] md:pt-[100px]  ">
        <div className="container p-5 m-auto text-center lg:max-w-[1000px]">
          <h2 className="pt-3  text-4xl md:text-4xl lg:text-5xl font-medium  leading-[110%] md:leading-[140%]">
            Writings
          </h2>
          <div className='mt-[0px] pb-[100px]'>

            {!data ? (
              <p style={{ color: 'red' }}>something went wrong</p>
            ) : (
              <div className='text-black'>

                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-[40px] gap-7 mt-14">
                  {data.map((post: any, index: number) => (

                    <div key={index} className='mt-5'>
                      <a href={`/blog/${post?.slug.current}`}>
                        <div className="">

                          <div>
                            {post?.image?.asset?._ref && (
                              <Image
                                id="leftImage"
                                src={urlFor((post?.image?.asset?._ref)).width(600).quality(80).url()}
                                alt={post?.title}
                                width={0}
                                sizes="100vw"
                                height={300}

                                style={{
                                  width: "100%",
                                  height: "250px",
                                  objectFit: "cover",
                                  borderRadius: "8px",
                                }}
                                loading="lazy"
                              />
                            )}
                            <div className="mt-4 text-left">
                              <h2 className="text-[20px] font-medium">{post?.title}</h2>
                              <p className="pt-1 text-[16px] text-gray-500">{post?.excerpt}</p>
                            </div>


                            {/* {post?.body.map((block: any) => (
                  <p key={block._key}>{block.children.map((child: any) => child.text).join(' ')}</p>
                ))} */}
                          </div>

                        </div>

                      </a>

                    </div>
                  )
                  )}</div>

              </div>
            )}
          </div>
        </div>

      </div>

    </main>
  )
}