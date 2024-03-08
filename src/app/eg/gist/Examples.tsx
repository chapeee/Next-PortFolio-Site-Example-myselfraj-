
import React from "react";
import GitGist from "@myselfraj/react-nextjs-github-gist";
export default function Examples() {
  return (
    <div className="mt-10 container m-auto">
      <h2 className="text-4xl mb-5">Gist Cod Sample</h2>
      <code>
        <pre>
       
          import GitGist from &quot;@myselfraj/react-nextjs-github-gist&quot;;<br /><br />
          &lt;GitGist 
          <br />id=&quot;1036aa9bf78709602485f0a9f9e47e50&quot; <br />
          file=&quot;&quot;
          <br />userName=&quot;chapeee&quot; <br />getProfile=&quot;true&quot; <br />height=&quot;700px&quot;{" "}
          <br />width=&quot;100%&quot; <br />/&gt;
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
