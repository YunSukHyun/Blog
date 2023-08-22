import { getPostData } from "@/service/posts";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

type Props = {
  params: {
    slug: string;
  };
};

const PostPage = async ({ params: { slug } }: Props) => {
  const post = await getPostData(slug);
  return (
    <>
      <h1>{post.title}</h1>
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </>
  );
};

export default PostPage;
