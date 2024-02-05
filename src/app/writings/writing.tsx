import React from "react";

interface BlogPost {
  id: number;
  title: string;
  attributes: {
    content: string;
    createdAt: string;
    // Add more attributes as needed
  };
}

interface WritingProps {
  blogPosts: BlogPost[];
}

const Writing: React.FC<WritingProps> = ({ blogPosts }) => {
  return (
    <div className="w-full bg-white text-black pt-[50px] md:pt-[100px]">
      <div className="container p-5 m-auto text-left max-w-[900px]">
        <h2 className="pt-3 text-center text-4xl md:text-4xl lg:text-5xl font-medium leading-[110%] md:leading-[140%]">
          My Writings..
        </h2>
        <div className="mt-[50px]">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {blogPosts && blogPosts.map((post) => (
              <div key={post.id} className="bg-gray-100 p-4 rounded-md">
                <h3 className="text-xl font-semibold">{post.title}</h3>
                <p className="text-gray-600 text-sm mb-2">{post.attributes.createdAt}</p>
                <p>{post.attributes.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  console.log("hey"); // Check if this log is printed in the server console

  // Replace 'YOUR_API_KEY' with your actual Strapi API key
  const apiKey = 'a989a6d999ae3ff99e68f8b4cd09723906bd0cff14ed3396f61d325d1d226511d2100afbff5c9bbbbcab366ba2bc76810ab6a71e0a93c400972befb144dd980914ff3c92dd85d642399186b326fea3d98b6968a2e4ebb88975045b053999c84951ff745e6161acb9a73fe23d9a949d79b30d56c853e3c80a6f3d78df97a5725d';

  try {
    const response = await fetch('http://localhost:1337/api/posts', {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });
    console.log(response); // Check if this log is printed in the server console

    if (response.ok) {
      const data: { data: BlogPost[] } = await response.json();

      if (Array.isArray(data?.data)) {
        return {
          props: { blogPosts: data.data },
        };
      } else {
        console.error('Invalid data format:', data);
      }
    } else {
      console.error('Error fetching blog posts:', response.statusText);
    }
  } catch (error) {
    console.error('Error fetching blog posts:', error);
  }

  // If there's an error or no data, return an empty array
  return {
    props: { blogPosts: [] },
  };
};

export default Writing;
