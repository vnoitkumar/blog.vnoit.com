import { type Author } from '@/interfaces/author';
import Link from 'next/link';
import DateFormatter from './date-formatter';
import Image from 'next/image';
import React from 'react';
import { trimTitle } from '@/utils/utils';

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
  tag: string;
};

export function PostPreview({
  title,
  coverImage,
  date,
  author,
  slug,
  tag,
}: Props) {
  return (
    <div className='flex-col justify-start items-start gap-5 inline-flex hover-up'>
      <Link
        className='rounded-3xl overflow-hidden max-h-96'
        href={`/posts/${slug}`}
        aria-label={`Read more about ${trimTitle(title)}`}
      >
        <Image src={coverImage} alt={title} width={1000} height={500} />
      </Link>
      <div className='flex-col justify-start items-start gap-3.5 flex'>
        <div className='justify-start items-center gap-5 inline-flex'>
          {/* <Link
            href={`/posts/${slug}`}
            aria-label={`Read more about ${tag}`}
            className='px-3 py-[8px] bg-neutral-200 dark:bg-neutral-dark-200 rounded-3xl border border-neutral-200 dark:border-neutral-dark-300 justify-center items-center gap-2.5 sm:flex hidden'
          >
            <div className='text-neutral-900 dark:text-neutral-dark-950 text-sm font-medium leading-none'>
              {tag}
            </div>
          </Link> */}
          <div className='justify-start items-center gap-2 flex'>
            <Image
              className='rounded-3xl'
              height={36}
              width={36}
              src={author.picture}
              alt={author.name}
            />
            <div className='text-neutral-700 text-sm font-medium leading-none dark:text-neutral-dark-700'>
              {author.name} - <DateFormatter dateString={date} />
            </div>
          </div>
        </div>
        <h3>
          <Link
            href={`/posts/${slug}`}
            aria-label={`Read more about ${trimTitle(title)}`}
            className='text-neutral-950 dark:text-neutral-dark-950 text-2xl font-bold leading-snug item-link'
          >
            {title}
          </Link>
        </h3>
      </div>
    </div>
  );
}
