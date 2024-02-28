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
    <div>
      {JSON.stringify(Post)}
      <a href={`/blog/${post.slug.current}`}>
        <div className="">
          <div>
            {post.image.asset._ref && (
              <Image
                id="leftImage"
                src={urlFor(post.image.asset._ref).width(600).quality(80).url()}
                alt={post.title}
                width={0}
                sizes="100vw"
                height={300}
                style={{
                  width: "100%",
                  height: "250px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
                loading="lazy"
              />
            )}
            <div className="mt-4 text-left">
              <h2 className="text-[20px] font-medium">{post.title}</h2>
              <p className="pt-1 text-[16px] text-gray-500">{post.excerpt}</p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Post;
