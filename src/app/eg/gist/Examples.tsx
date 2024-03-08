"use client";
import React from "react";
import GitGist from "@myselfraj/react-nextjs-github-gist";
export default function Examples() {
  return (
    <div className="mt-10 container m-auto">
      <h2 className="text-4xl mb-5">Gist Cod Sample</h2>
      <code>
        <pre>
          "use client"<br/> 
          import GitGist from "@myselfraj/react-nextjs-github-gist";<br /><br />
          &lt;GitGist 
          <br />id="1036aa9bf78709602485f0a9f9e47e50" <br />
          file=""
          <br />userName="chapeee" <br />getProfile="true" <br />height="700px"{" "}
          <br />width="100%" <br />/&gt;
        </pre>
      </code>
      <div className="mt-[50px]">
        <GitGist
          id="1036aa9bf78709602485f0a9f9e47e50"
          file=""
          userName="chapeee"
          getProfile="true"
          height="700px"
          width="100%"
        />
      </div>
    </div>
  );
}
