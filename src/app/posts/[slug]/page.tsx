import { getPostData } from "@/service/posts";
import Image from "next/image";
import { AiTwotoneCalendar } from "react-icons/ai";
import { MarkdownViewer } from "@/components/MarkdownViewer";

type Props = {
  params: {
    slug: string;
  };
};

const PostPage = async ({ params: { slug } }: Props) => {
  const { title, description, date, path, content } = await getPostData(slug);
  return (
    <>
      <article className="rounded-xl overflow-hidden dark:bg-gray-900 bg-gray-100 shadow-lg m-2">
        <Image
          className="w-full h-1/6"
          src={`/images/posts/${path}.png`}
          alt="title"
          width={760}
          height={420}
        />
        <section className="flex flex-col p-4">
          <div className="flex items-center self-end text-sky-600">
            <AiTwotoneCalendar />
            <p className="font-semibold ml-1">{date.toString()}</p>
          </div>
          <h1 className="text-4xl">{title}</h1>
          <p className="text-4xl font-bold">{description}</p>
          <MarkdownViewer content={content} />
        </section>
      </article>
    </>
  );
};

export default PostPage;
