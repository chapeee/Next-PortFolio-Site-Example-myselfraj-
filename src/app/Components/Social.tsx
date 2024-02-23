import React from "react";

export default function Social() {
  return (
    <div className="flex items-center" style={{ flexDirection: "column" }}>
      <div className="badge text-white bg-siteDefaultColor mt-14 mb-5">
        Profiles
      </div>
      <h2 className="sm:text-4xl md:text-5xl text-center mb-10 font-bold">
        Check My Social Worlds
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
        <a target="_blank" href="https://www.linkedin.com/in/myselfraj/">
          <div className="bg-gray-200 p-2 text-4xl font-medium min-w-[300px] min-h-[300px] text-center flex items-center justify-center">
            Linkedin
          </div>
        </a>
        <a target="_blank" href="https://github.com/chapeee">
          <div className="bg-gray-200 p-2 text-4xl font-medium min-w-[300px] min-h-[300px] flex items-center justify-center">
            Github
          </div>
        </a>
      </div>
    </div>
  );
}
