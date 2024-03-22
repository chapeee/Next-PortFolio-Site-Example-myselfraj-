import React from 'react'

type Props = {}

export default function Achievments({ }: Props) {
    return (

        <div className='text-dark pt-[100px] pb-[100px] text-gray-600 bg-white w-full text-cenbter'>
            <div className="container m-auto">
                <div className="grid md:gap-14 grid-cols-2">
                    <div>
                        <div className="grid gap-3 grid-cols-2">
                            <div className="border border-gray-300 text-center rounded-full flex flex-col justify-center items-center" style={{ width: "18rem", height: "18rem" }}>
                                <div style={{ fontSize: "4.5rem" }}>3oo+</div>
                                <div className="text-1xl pt-0" style={{ fontSize: "0.8rem" }}>Monthly Downloads</div>
                            </div>
                            <div className="transform  lg:-translate-x-[10rem] border border-gray-300 text-center rounded-full flex flex-col justify-center items-center" style={{ width: "18rem", height: "18rem" }}>
                                <div style={{ fontSize: "4.5rem" }}>3oo+</div>
                                <div className="text-1xl pt-0" style={{ fontSize: "0.8rem" }}>Monthly Downloads</div>
                            </div>
                            <div className="border lg:-translate-y-[35px] border-gray-300 text-center rounded-full flex flex-col justify-center items-center" style={{ width: "18rem", height: "18rem" }}>
                                <div style={{ fontSize: "4.5rem" }}>3oo+</div>
                                <div className="text-1xl pt-0" style={{ fontSize: "0.8rem" }}>Monthly Downloads</div>
                            </div>
                            <div className="transform  lg:-translate-y-[35px] lg:-translate-x-[115px] border border-gray-300 text-center rounded-full flex flex-col justify-center items-center" style={{ width: "18rem", height: "18rem" }}>
                                <div style={{ fontSize: "4.5rem" }}>3oo+</div>
                                <div className="text-1xl pt-0" style={{ fontSize: "0.8rem" }}>Monthly Downloads</div>
                            </div>



                        </div>
                    </div>
                    <div><h2 className="text-5xl">My achievemnts</h2>
                        <p className='text-2xl pt-4'>y achievemntsy achievemntsy achievemntsy achievemnts</p>
                    </div>
                </div>
            </div>
        </div>
    )
}