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
  const metadata = await getAllPosts().then((posts) =>
    posts.find((post) => post.path === fileName)
  );
  if (!metadata) throw Error(`${fileName} Not found`);
  const content = await readFile(filePath, "utf-8");
  return { ...metadata, content };
};
