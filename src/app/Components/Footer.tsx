import React from 'react'

type Props = {}

export default function Footer({ }: Props) {
    return (
        <div className='bg-white '>
            <div className="container m-auto">
                <div className=" lg:p-14 pt-0 pb-0 mb-0 md:p-10 p-7 -mt-[100px] md:-mt-[180px]">
                    <div className='text-[19vw] text-center text-siteDefaultColor'>Rajneesh</div>
                </div></div>
                <div className='pb-0 w-full p-4' style={{ borderTop: "1px solid #09757a" }}></div>
                <div className=" grid grid-cols-1  sm:grid-cols-3 w-full text-center pb-5 max-w-[900px] m-auto" >

                    <a
                        href="https://www.linkedin.com/in/myselfraj/"
                        className="text-2xl m-2 font-medium underline text-gray-800"
                    >
                        Follow on Linkedin
                    </a>
                    <a
                        href="https://github.com/chapeee"
                        className="text-2xl m-2 font-medium underline text-gray-800"
                    >
                        Check My GitHub
                    </a>
                    <a
                        href="https://www.npmjs.com/~chapeee"
                        className="text-2xl m-2 font-medium underline text-gray-800"
                    >
                        My Js/Ts Packages
                    </a>
                </div>
        </div>

    )
}