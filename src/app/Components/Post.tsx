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
      <a
        href={`/blog/${post.slug.current}`}
        className="group block h-full rounded-3xl border border-slate-200/70 bg-white/90 p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      >
        <div className="overflow-hidden rounded-2xl">
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
                borderRadius: "18px",
              }}
              className="transition-transform duration-500 group-hover:scale-[1.03]"
              loading="lazy"
            />
          )}
        </div>
        <div className="mt-4 text-left">
          <h2 className="text-lg font-semibold text-slate-900 md:text-xl">{post.title}</h2>
          <p className="pt-2 text-sm text-slate-600 md:text-base">{post.excerpt}</p>
        </div>
      </a>
    </div>
  );
};

export default Post;
