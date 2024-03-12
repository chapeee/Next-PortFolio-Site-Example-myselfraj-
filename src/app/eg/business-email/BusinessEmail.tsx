"use client";
import React, { useState, useEffect } from "react";
import { isBusinessMail } from "@myselfraj/is-business-mail";

export default function BusinessEmail() {
  const [grapdevs, setGrapdevs] = useState(false);
  const [gmail, setGmail] = useState(false);

  useEffect(() => {
    setGrapdevs(isBusinessMail("contact@myselfraj.com"));
    setGmail(isBusinessMail("who@gmail.com"));
  }, [grapdevs, gmail]);

  return (
    <div>
      <div className="mt-[50px] mb-[50px] container m-auto flex justify-center row items-center">
        <div>
          <h2 className="text-4xl">Demo! Is Business E-mail? </h2>
          <div className="mt-10">
            <div>
              <p className="text-2xl">contact@myselfraj.com: <span className="text-[red]">{grapdevs.toString()}</span></p>
              <p className="text-2xl">who@gmail.com: <span className="text-[red]">{gmail.toString()}</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
