import React from 'react'
import Newsletter from './Newsletter'
import Image from 'next/image'

type Props = {}

export default function Footer({ }: Props) {
    return (
        <div className='relative overflow-hidden bg-gradient-to-br from-siteDefaultColor via-[#0b8590] to-[#053f55] text-white'>
            <div className="absolute left-[-10%] top-[-20%] h-[320px] w-[320px] rounded-full bg-white/10 blur-3xl"></div>
            <div className="absolute right-[-15%] bottom-[-10%] h-[360px] w-[360px] rounded-full bg-white/5 blur-3xl"></div>
            <div className="container relative z-10 m-auto">
                <Newsletter />
                <div className="relative -mt-[100px] p-7 pt-0 pb-0 md:-mt-[80px] md:p-10">
                    <div className="overflow-hidden rounded-[32px] border border-white/30 bg-white/10 shadow-2xl backdrop-blur">
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
                    </div>
                </div>
            </div>
            <div className='relative z-10 w-full border-t border-white/30 px-4 pt-8 sm:-mt-[20px]'></div>
            <div className="relative z-10 grid w-full max-w-[900px] grid-cols-1 gap-6 px-6 pb-10 pt-6 text-center text-white/90 sm:grid-cols-3 m-auto">

                <a
                    href="https://www.linkedin.com/in/myselfraj/"
                    className="text-xl font-semibold uppercase tracking-[0.2em] hover:text-white"
                >
                    Follow on Linkedin
                </a>
                <a
                    href="https://github.com/chapeee"
                    className="text-xl font-semibold uppercase tracking-[0.2em] hover:text-white"
                >
                    Check My GitHub
                </a>
                <a
                    href="https://www.npmjs.com/~chapeee"
                    className="text-xl font-semibold uppercase tracking-[0.2em] hover:text-white"
                >
                    My Js/Ts Packages
                </a>
            </div>
        </div>

    )
}
