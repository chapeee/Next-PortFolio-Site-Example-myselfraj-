import React from "react";
import LearnSidebar from "../Components/LearnSidebar";

export default async function LearnTech() {
  return (
    <div className="w-full bg-white text-black pt-[50px] md:pt-[100px] ">
      <div className="container p-5 m-auto ">
        <LearnSidebar />
      </div>
    </div>
  );
}
