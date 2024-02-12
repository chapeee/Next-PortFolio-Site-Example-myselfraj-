"use client"
import React, { useEffect } from "react";

import AOS from "aos";

export default function DigitalMarvels() {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div>  <div className="z-[999] relative bg-gray-100">
            <div className="bg-siteDefaultColor text-white pt-14 pb-14 min-h-[100vh] flex justify-center ">
                <div className="container m-auto p-5 pt-0 pb-0">
                    <div
                        className="text-[48px] sm:-[58px] lg:text-8xl font-medium text-center " style={{ lineHeight: "120%" }}
                        data-aos="zoom-in"
                        data-aos-once="true"
                        data-aos-delay="50"
                        data-aos-duration="700"
                    >
                        Weaving Digital Marvels with Spider-Inspired Flair
                    </div>
                </div>
            </div>

        </div></div>
    )
}