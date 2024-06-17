import Image from "next/image";
import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";
import { PostTitle } from "@/app/_components/post-title";
import { type Author } from "@/interfaces/author";

type Props = {
  title: string;
  excerpt: string;
  date: string;
  author: Author;
};

function trimTitle(title: string) {
  if (title.length > 50) title = `${title.substring(0, 50)}..`;
  return title;
}

export function PostHeader({ title, excerpt, date, author }: Props) {
  return (
    <>
      <section className="relative">
        <div className="container px-4">
          <div className="flex w-full justify-center item-center md:mb-6 mt-10">
            <div className="hidden md:flex gap-2.5 justify-start items-center h-12 px-7 py-3.5 bg-amber-50 dark:bg-amber-50 rounded-3xl border border-neutral-200 dark:border-neutral-200">
              <a
                className="text-neutral-700 dark:text-neutral-dark-700 text-base font-medium  leading-normal"
                href="/"
              >
                Home
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={8}
                height={12}
                viewBox="0 0 8 12"
                className="fill-neutral-700 dark:fill-neutral-dark-700"
              >
                <path d="M1.52344 11.9961C1.24219 11.9961 0.992188 11.9023 0.804688 11.7148C0.398438 11.3398 0.398438 10.6836 0.804688 10.3086L5.08594 5.99609L0.804688 1.71484C0.398438 1.33984 0.398438 0.683594 0.804688 0.308594C1.17969 -0.0976562 1.83594 -0.0976562 2.21094 0.308594L7.21094 5.30859C7.61719 5.68359 7.61719 6.33984 7.21094 6.71484L2.21094 11.7148C2.02344 11.9023 1.77344 11.9961 1.52344 11.9961Z" />
              </svg>
              <a
                className="text-neutral-700 dark:text-neutral-dark-700 text-base font-medium leading-normal"
                href="/category"
              >
                Posts
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={8}
                height={12}
                viewBox="0 0 8 12"
                className="fill-neutral-700 dark:fill-neutral-dark-700"
              >
                <path d="M1.52344 11.9961C1.24219 11.9961 0.992188 11.9023 0.804688 11.7148C0.398438 11.3398 0.398438 10.6836 0.804688 10.3086L5.08594 5.99609L0.804688 1.71484C0.398438 1.33984 0.398438 0.683594 0.804688 0.308594C1.17969 -0.0976562 1.83594 -0.0976562 2.21094 0.308594L7.21094 5.30859C7.61719 5.68359 7.61719 6.33984 7.21094 6.71484L2.21094 11.7148C2.02344 11.9023 1.77344 11.9961 1.52344 11.9961Z" />
              </svg>
              <span className="text-neutral-900 dark:text-neutral-dark-950 text-base font-bold leading-snug">
                {trimTitle(title)}
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-4 items-center justify-center text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-neutral-800 dark:text-neutral-dark-800 max-w-5xl leading-snug">
              {title}
            </h1>
            <p className="text-base md:text-lg font-medium text-neutral-800 dark:text-neutral-dark-800 max-w-3xl">
              {excerpt}
            </p>
            <div className="justify-center items-center gap-4 flex flex-col md:flex-row">
              <div className="justify-start items-center gap-2 flex">
                <div>
                  <Image className="rounded-full" width={50} height={50} src={author.picture} alt={author.name} />
                </div>
                <div className="text-neutral-500 text-sm font-medium leading-none dark:text-neutral-dark-700">
                  {author.name} - <DateFormatter dateString={date} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
