import { getAllPosts } from "@/service/posts";
import { PostGrid } from "@/components/PostGrid";
import { FilterablePosts } from "@/components/FilterablePost";

const PostPage = async () => {
  const posts = await getAllPosts();
  const categories = [...new Set(posts.map((post) => post.category))];
  return <FilterablePosts posts={posts} categories={categories} />;
};

export default PostPage;
