import React from 'react'

type Props = {}

export default function Achievments({ }: Props) {
    return (

        <div className='text-dark pt-[100px] pb-[100px] text-gray-600 bg-[#f8f8f9] w-full text-cenbter'>
            <div className="container p-5 m-auto max-w-[1050px]">
                <div className="grid gap-14 md:grid-cols-2">
                    <div>
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                            <div className="border border-gray-300 text-center rounded-full flex flex-col justify-center items-center" style={{ width: "16rem", height: "16rem" }}>
                                <div className='text-[5.1rem]'>100+</div>
                                <div className="text-1xl pt-0" style={{ fontSize: "0.8rem" }}>Projects</div>
                            </div>
                            <div className="  md:translate-x-cutom  border border-gray-300 text-center rounded-full flex flex-col justify-center items-center" style={{ width: "16rem", height: "16rem" }}>
                                <div className='text-[5.1rem]'>40+</div>
                                <div className="text-1xl pt-0" style={{ fontSize: "0.8rem" }}>Clients</div>
                            </div>
                        </div>
                        <div className="translate-y-cutom grid grid-cols-1 lg:grid-cols-2">
                            <div className="border   transform-none border-gray-300 text-center rounded-full flex flex-col justify-center items-center" style={{ width: "16rem", height: "16rem" }}>
                                <div className='text-[5.1rem]'>3+</div>
                                <div className="text-1xl pt-0" style={{ fontSize: "0.8rem" }}>Open Sources</div>
                            </div>
                            <div className="   md:translate-x-cutom  border border-gray-300 text-center rounded-full flex flex-col justify-center items-center" style={{ width: "16rem", height: "16rem" }}>
                                <div className='text-[5.1rem]'>3+</div>
                                <div className="text-1xl pt-0" style={{ fontSize: "0.8rem" }}>Own Projects</div>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-end flex-col mb-[50px]'><h2 className="text-5xl">Elevating Achievements, Embark on a Journey:</h2>
                        <p className='text-1xl pt-4'>I have worked on over 100 projects, using more than 15 different technologies. These projects have been launched on various platforms, many of which have gained millions of users.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}