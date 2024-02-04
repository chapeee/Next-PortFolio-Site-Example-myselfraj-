import React from "react";
import Image from "next/image";

export default function HomeWriting() {
  return (
    <div className="w-full z-[9] bg-gray-100 relative">
      <div className="container p-5 m-auto pt-[100px] pb-[100px] lg:max-w-[1000px]">
        <div className="grid grid-cols-3 lg:gap-[30px]">
          <div className="col-span-1">
            <h2 className="text-4xl md:text-4xl lg:text-5xl font-medium mb-6 leading-[110%] md:leading-[140%]">
              Writings:
            </h2>
            <a href="/writings" className="text-[18px] pt-10">
              <u>Read More</u>
            </a>
          </div>
          <div className="col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-[40px] gap-7">
              <div className="mt-5">
                <Image
                  id="leftImage"
                  src="https://images.unsplash.com/photo-1517971129774-8a2b38fa128e?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Writings"
                  width={0}
                  sizes="100vw"
                  height={300}
                  style={{
                    width: "100%",
                    height: "250px",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                  loading="lazy"
                />
                <div className="mt-3">
                <h2 className="text-[21px] font-medium">Creator Ecomony Writer</h2>
                <p className="pt-1 text-gray-600">This is ecomony writer and we know how we do the things</p>
                </div>
               
              </div>
              <div className="mt-5">
                <Image
                  id="leftImage"
                  src="https://images.unsplash.com/photo-1517703565892-7cdb859e127b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D"
                  alt="Writings"
                  width={0}
                  sizes="100vw"
                  height={300}
                  style={{
                    width: "100%",
                    height: "250px",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                  loading="lazy"
                />
                <div className="mt-3">
                <h2 className="text-[21px] font-medium">Creator Ecomony Writer</h2>
                <p className="pt-1 text-gray-600">This is ecomony writer and we know how we do the things</p>
                </div>
               
              </div>
              <div className="mt-5">
                <Image
                  id="leftImage"
                  src="https://ik.imagekit.io/mq90sdk8y/myselfraj/acri.png?updatedAt=1706960896731"
                  alt="Writings"
                  width={0}
                  sizes="100vw"
                  height={300}
                  style={{
                    width: "100%",
                    height: "250px",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                  loading="lazy"
                />
                <div className="mt-3">
                <h2 className="text-[21px] font-medium">Creator Ecomony Writer</h2>
                <p className="pt-1 text-gray-600">This is ecomony writer and we know how we do the things</p>
                </div>
               
              </div>
              <div className="mt-5">
                <Image
                  id="leftImage"
                  src="https://images.unsplash.com/photo-1520881363902-a0ff4e722963?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8"
                  alt="Writings"
                  width={0}
                  sizes="100vw"
                  height={300}
                  style={{
                    width: "100%",
                    height: "250px",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                  loading="lazy"
                />
                <div className="mt-3">
                <h2 className="text-[21px] font-medium">Creator Ecomony Writer</h2>
                <p className="pt-1 text-gray-600">This is ecomony writer and we know how we do the things</p>
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
