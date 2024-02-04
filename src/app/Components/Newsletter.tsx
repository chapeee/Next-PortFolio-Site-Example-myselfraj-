import React from "react";

export default function Newsletter() {
  return (
    <div className="w-full bg-white text-black pt-[100px] pb-[100px]">
      <div className="container p-5 m-auto text-center">
        <h2 className="text-4xl font-medium">Join my newsletter</h2>
        <p className="text-[18px] max-w-[700px] m-auto mt-5">
          By joining my newsletter, you'll receive updates on the latest
          technology news and have the opportunity to learn more about coding.
        </p>
        <div className="md:join mt-10">
          <input
            type="text"
            className="input  join-item w-full md:w-[300px]  text-siteDefaultColor bg-white  border border-gray-400"
            aria-labelledby="subsribe write your email"
            placeholder="Your Email"
          
          />
          <button
            type="button"
            className="btn bg-siteDefaultColor text-white join-item mt-5 md:mt-0 w-full md:w-auto"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
