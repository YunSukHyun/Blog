import { getFeaturedPost } from "@/ service/posts";
import React from "react";
import { PostGrid } from "./PostGrid";

export const FeaturedPost = async () => {
  const posts = await getFeaturedPost();
  return (
    <section className="my-2">
      <h2 className="text-2xl font-bold my-1 mx-2">Featured Posts</h2>
      <PostGrid posts={posts} />
    </section>
  );
};
