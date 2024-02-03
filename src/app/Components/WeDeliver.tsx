import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function WeDeliver() {
  const [opacityagile, setOpacityagile] = useState(1);
  const [opacitycodeQulity, setOpacitycodeQulity] = useState(0.3);
  const [opacityAlleviate, setOpacityAlleviate] = useState(0.3);

  useEffect(() => {
    const leftImage = document.getElementById("leftImage") as HTMLImageElement;
    const agileHeading = document.getElementById("agile");
    const codeQulityHeading = document.getElementById("codeQulity");
    const AlleviateHeading = document.getElementById("Alleviate");

    const isInView = (element: any) => {
      const rect = element.getBoundingClientRect();
      const middleOfImage = leftImage.getBoundingClientRect().top + leftImage.getBoundingClientRect().height / 2;
     
      return (
        rect.top <= middleOfImage &&
        rect.bottom >= middleOfImage
      );
    };
    
    
    const handleScroll = () => {
      if (window.innerWidth <= 767) {
        setOpacityagile(1);
        setOpacitycodeQulity(1);
        setOpacityAlleviate(1);
        return true;
      }
      if (isInView(agileHeading)) {
        if (leftImage) {
          leftImage.src =
            "https://ik.imagekit.io/mq90sdk8y/myselfraj/acri.png?updatedAt=17069618344912";
          setOpacityagile(1);
          setOpacitycodeQulity(0.3);
          setOpacityAlleviate(0.3);
        }
      } else if (isInView(codeQulityHeading)) {
        if (leftImage) {
          leftImage.src =
            "https://ik.imagekit.io/mq90sdk8y/myselfraj/choreless-gif.gif?updatedAt=1706970481588";
          setOpacityagile(0.3);
          setOpacitycodeQulity(1);
          setOpacityAlleviate(0.3);
        }
      } else if (isInView(AlleviateHeading)) {
        if (leftImage) {
          leftImage.src =
            "https://ik.imagekit.io/mq90sdk8y/image/tr:q:90,w-550/stress-free-dev-grapdevs.avif?updatedAt=1706537243567";
          setOpacityagile(0.3);
          setOpacitycodeQulity(0.3);
          setOpacityAlleviate(1);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-white text-black w-full">
      
      <div className="container  m-auto p-14 ">
        <div className="p-5 grid grid-cols-1 md:grid-cols-2 md:gap-[70px] lg:gap-[220px]">
          <div className="relative md:sticky md:top-[100px] md:h-[700px] lg:h-[720px]">
            <h2 className="text-4xl md:text-4xl lg:text-5xl font-medium md:mb-14 leading-[110%] md:leading-[140%]">
            <span className="border-b-2 border-transparent border-siteDefaultColor ">Crafted Creations: </span><br /> 
            <div className="mt-8 text-3xl">My Unique Project Achievements</div>
            </h2>
            <div className="mockup-window border border-gray-600">
            <Image
              id="leftImage"
              src="https://ik.imagekit.io/mq90sdk8y/myselfraj/acri.png?updatedAt=17069618344912"
              alt="Deliver quality applications with Grapdevs Technologies"
              width={0}
              sizes="100vw"
              height={300}
              className="hidden md:block"
              style={{
                width: "100%",
                height: "360px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
              loading="lazy"
            />
            </div>
            
          </div>
          <div className="md:max-w-[500px] md:mt-0 mt-14 ">
            <Image
              id="leftImage"
              src="https://ik.imagekit.io/mq90sdk8y/myselfraj/acri.png?updatedAt=1706960896731"
              alt="Deliver quality applications with Grapdevs Technologies"
              width={0}
              sizes="100vw"
              height={300}
              className="md:hidden block"
              style={{
                width: "100%",
                height: "300px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
              loading="lazy"
            />
            <div
              className="pt-7 pb-14 md:pb-[250px] md:pt-[290px]"
              id="agile"
              style={{ opacity: opacityagile }}
            >
              <h3 className="mb-[14px] text-3xl md:text-[34px] font-[600] leading-[110%]">
                VLE Platform
              </h3>
              <p className="text-[18px]" >
              I began this Virtual learning environment  project as a college assignment during my final semester. Later, when I started freelancing, a client needed a similar solution. I introduced them with my platform, they liked it, and requested some modifications. We ended up making around 45% changes according to their requirements, and eventually, I sold the customized platform to them.
              </p>
             
           
              <div className="grid gap-3 grid-cols-3 mt-8">
                <div>
                    <div className="text-[16px] text-gray-700 font-bold">Project</div>
                    <div className="text-[18px] text-black pt-1">Acri</div>
                </div>
                <div>
                    <div className="text-[16px] text-gray-700 font-bold">Role</div>
                    <div className="text-[18px] text-black pt-1">Full Stack Dev.</div>
                </div>
                <div>
                    <div className="text-[16px] text-gray-700 font-bold">Date</div>
                    <div className="text-[18px] text-black pt-1">2020-2022</div>
                </div>
               
              </div>
              <div className="mt-4">
                    <div className="text-[16px] text-gray-700 font-bold">Tech</div>
                    <div className="text-[18px] text-black pt-1">CI, Sql, Jenkins, Docker, Git, Python, and Bs</div>
                </div>
            </div>
            <Image
              id="leftImage"
              src="https://ik.imagekit.io/mq90sdk8y/image/tr:q:90,w-550/code-quality-grapdevs.avif?updatedAt=1706537093166"
              alt="Deliver quality applications with Grapdevs Technologies"
              width={0}
              sizes="100vw"
              height={300}
              className="md:hidden block"
              style={{
                width: "100%",
                height: "300px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
              loading="lazy"
            />
            <div
              className="pt-7 pb-14 md:pb-[250px] duration-300"
              id="codeQulity"
              style={{ opacity: opacitycodeQulity }}
            >
              <h3 className="mb-[14px] text-3xl md:text-[34px]  font-[600] leading-[110%]">
                Choreless Laundry
              </h3>
              <p className="text-[18px]">
               
I aided them in redesigning their website entirely, developing a dashboard to oversee their washing machines, orders, washers, payments, order tracking, and invoice maintenance. Additionally, I created an app for placing orders.
              </p>
              <div className="grid gap-3 grid-cols-3 mt-8">
                <div>
                    <div className="text-[16px] text-gray-700 font-bold">Project</div>
                    <div className="text-[18px] text-black pt-1">Choreless</div>
                </div>
                <div>
                    <div className="text-[16px] text-gray-700 font-bold">Role</div>
                    <div className="text-[18px] text-black pt-1">Full Stack Dev.</div>
                </div>
                <div>
                    <div className="text-[16px] text-gray-700 font-bold">Date</div>
                    <div className="text-[18px] text-black pt-1">2021-2023</div>
                </div>
               
              </div>
              <div className="mt-4">
                    <div className="text-[16px] text-gray-700 font-bold">Tech</div>
                    <div className="text-[18px] text-black pt-1">Vue, Next, Ionic Framework, Sql, Wordpress, Jenkins, Git, Nuxt, Core Php, TW and Bs</div>
                </div>
            </div>
            <Image
              id="leftImage"
              src="https://ik.imagekit.io/mq90sdk8y/image/tr:q:90,w-550/stress-free-dev-grapdevs.avif?updatedAt=1706537243567"
              alt="Deliver quality applications with Grapdevs Technologies"
              width={0}
              sizes="100vw"
              height={300}
              className="md:hidden block"
              style={{
                width: "100%",
                height: "350px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
              loading="lazy"
            />
            <div
              className="pt-7 pb-14 md:pb-[250px] duration-300"
              id="Alleviate"
              style={{ opacity: opacityAlleviate }}
            >
              <h3 className="mb-[14px] text-3xl md:text-[34px]  font-[600] leading-[110%]">
                Alleviate your stress
              </h3>
              <p className="text-[18px]">
                Relax and spend quality time with your family while our
                development team manages the workload. Once we finish the
                documentation and pre-staging meetings, be confident that
                everything is in our capable hands.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
