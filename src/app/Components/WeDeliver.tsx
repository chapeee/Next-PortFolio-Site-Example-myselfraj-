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
            "https://ik.imagekit.io/mq90sdk8y/image/tr:q:90,w-450/agline-modal.avif?updatedAt=1706536169442";
          setOpacityagile(1);
          setOpacitycodeQulity(0.3);
          setOpacityAlleviate(0.3);
        }
      } else if (isInView(codeQulityHeading)) {
        if (leftImage) {
          leftImage.src =
            "https://ik.imagekit.io/mq90sdk8y/image/tr:q:90,w-550/code-quality-grapdevs.avif?updatedAt=1706537093166";
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
        <div className="p-5 grid grid-cols-1 md:grid-cols-2 md:gap-[70px] lg:gap-[140px]">
          <div className="relative md:sticky md:top-[100px] md:h-[700px] lg:h-[720px]">
            <h2 className="text-4xl md:text-4xl lg:text-5xl font-medium md:mb-14 leading-[110%] md:leading-[140%]">
              Deliver quality <span className="font-bold">apllications</span>{" "}
              with quality <span className="font-bold">codes</span>
            </h2>
            <Image
              id="leftImage"
              src="https://ik.imagekit.io/mq90sdk8y/image/tr:q:90,w-450/agline-modal.avif?updatedAt=1706536169442"
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
          <div className="md:max-w-[400px] md:mt-0 mt-14 ">
            <Image
              id="leftImage"
              src="https://ik.imagekit.io/mq90sdk8y/image/tr:q:90,w-450/agline-modal.avif?updatedAt=1706536169442"
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
                Agile Development
              </h3>
              <p className="text-[18px]">
                By an Agile Development we prioritize flexibility and open
                communication, enabling us to adapt to evolving project needs
                and deliver solutions that truly meet our clients&apos;
                expectations
              </p>
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
                Code Quality Excellence
              </h3>
              <p className="text-[18px]">
                Incorporate continuous integration and continuous delivery
                (CI/CD) practices to automate testing and deployment, ensuring a
                streamlined and error-free development process.
              </p>
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
