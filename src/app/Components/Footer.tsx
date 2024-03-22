import React from 'react'
import Newsletter from './Newsletter'
import Image from 'next/image'

type Props = {}

export default function Footer({ }: Props) {
    return (
        <div className='bg-[#09757a] '>
            <div className="container m-auto">
                <Newsletter />
                <div className=" pt-0 mb-0 md:p-10 p-7 pb-0 -mt-[100px] md:-mt-[80px]">
                    <Image
                        src="/thankyou.png"
                        alt="thank you"
                        width={0}
                        sizes="100vw"
                        height={300}
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                        }}
                        loading="lazy"
                    />
                </div></div>
            <div className='pb-0 w-full p-4 sm:-mt-[50px]' style={{ borderTop: "1px solid #fff" }}></div>
            <div className=" grid grid-cols-1  pt-7  sm:grid-cols-3 w-full text-center pb-7 max-w-[900px] text-gray-100 m-auto" >

                <a
                    href="https://www.linkedin.com/in/myselfraj/"
                    className="text-2xl m-2 font-medium underline "
                >
                    Follow on Linkedin
                </a>
                <a
                    href="https://github.com/chapeee"
                    className="text-2xl m-2 font-medium underline "
                >
                    Check My GitHub
                </a>
                <a
                    href="https://www.npmjs.com/~chapeee"
                    className="text-2xl m-2 font-medium underline "
                >
                    My Js/Ts Packages
                </a>
            </div>
        </div>

    )
}