import React from "react";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import sanityclient from "../lib/createClient";

const builder = imageUrlBuilder(sanityclient);
function urlFor(source: string) {
  return builder.image(source);
}

interface PostProps {
  post: {
    slug: {
      current: string;
      _type: string;
    };
    image: {
      _type: string;
      asset: {
        _ref: string;
        _type: string;
      };
    };
    title: string;
    excerpt: string;
  };
}

const Post: React.FC<PostProps> = ({ post }) => {
  return (
    <div className="group">
      <a href={`/blog/${post.slug.current}`}>
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700 hover:border-accent transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-accent/20">
          <div>
            {post.image.asset._ref && (
              <Image
                id="leftImage"
                src={urlFor(post.image.asset._ref).width(600).quality(80).url()}
                alt={post.title}
                width={0}
                sizes="100vw"
                height={300}
                className="rounded-lg border-2 border-gray-600 group-hover:border-accent transition-all duration-300"
                style={{
                  width: "100%",
                  height: "250px",
                  objectFit: "cover",
                }}
                loading="lazy"
              />
            )}
            <div className="mt-4 text-left">
              <h2 className="text-[20px] font-medium text-white group-hover:text-accent transition-colors duration-300">{post.title}</h2>
              <p className="pt-1 text-[16px] text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{post.excerpt}</p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Post;
