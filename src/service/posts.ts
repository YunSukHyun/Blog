import { readFile } from "fs/promises";
import path from "path";

export type Post = {
  title: string;
  description: string;
  date: Date;
  category: string;
  path: string;
  featured: boolean;
};

export type PostData = Post & {
  content: string;
  next: Post | null;
  prev: Post | null;
};

export const getAllPosts = async (): Promise<Post[]> => {
  const filePath = path.join(process.cwd(), "data", "posts.json");
  return readFile(filePath, "utf-8")
    .then<Post[]>(JSON.parse)
    .then((posts) => posts.sort((a, b) => (a.date > b.date ? -1 : 1)));
};

export const getFeaturedPost = async () => {
  return getAllPosts().then((posts) => posts.filter((post) => post.featured));
};

export const getOtherPost = async () => {
  return getAllPosts().then((posts) => posts.filter((post) => !post.featured));
};

export const getPostData = async (fileName: string) => {
  const filePath = path.join(process.cwd(), "data", "posts", `${fileName}.md`);
  const posts = await getAllPosts();
  const post = posts.find((post) => post.path === fileName);
  if (!post) throw Error(`${fileName}`);
  const idx = posts.indexOf(post);
  const next = idx > 0 ? posts[idx - 1] : null;
  const prev = idx < posts.length - 1 ? posts[idx + 1] : null;
  const content = await readFile(filePath, "utf-8");
  return { ...post, content, next, prev };
};
