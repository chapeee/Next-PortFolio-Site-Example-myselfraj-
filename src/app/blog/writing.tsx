
import { getPosts } from '../lib/sanity'
import imageUrlBuilder from '@sanity/image-url'
import sanityclient from '../lib/createClient'
import Image from "next/image";
import Post from '../Components/Post'

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
                   
                      <Post post={post} />

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