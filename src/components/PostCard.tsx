import { Post } from "@/service/posts";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = { post: Post };
export const PostCard = ({
  post: { title, description, date, category, path },
}: Props) => {
  return (
    <Link href={`/post/${path}`}>
      <article className="rounded-sm overflow-hidden shadow-lg">
        <Image
          className="w-full"
          src={`/images/posts/${path}.png`}
          alt={title}
          width={300}
          height={200}
        />
      </article>
      <div className="flex flex-col items-center p-2">
        <time className="self-auto text-gray-700 dark:text-gray-200">
          {date.toString()}
        </time>
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="w-full truncate text-center">{description}</p>
        <span className="text-sm rounded-md bg-green-100 dark:bg-green-600 px-2 my-2">
          {category}
        </span>
      </div>
    </Link>
  );
};
