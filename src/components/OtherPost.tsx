import { getOtherPost } from "@/service/posts";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { MultiCarousel } from "./MultiCarousel";
import { PostCard } from "./PostCard";

export const OtherPost = async () => {
  const posts = await getOtherPost();
  return (
    <section className="my-2">
      <h2 className="text-2xl font-bold">You May Like</h2>
      <MultiCarousel>
        {posts.map((post) => (
          <PostCard key={post.path} post={post} />
        ))}
      </MultiCarousel>
    </section>
  );
};
