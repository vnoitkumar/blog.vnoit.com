import Image from 'next/image';
import markdownStyles from './markdown-styles.module.css';
import React from 'react';

type Props = {
  content: string;
  coverImage: string;
  title: string;
};

export function PostBody({ content, coverImage, title }: Props) {
  return (
    <>
      <section className='relative py-6'>
        <div className='post-content max-w-[750px] m-auto'>
          <div className='single-content text-base font-medium text-neutral-950 dark:text-neutral-dark-950 leading-relaxed max-w-3xl'>
            <Image
              className='rounded-md mb-8'
              src={coverImage}
              height={500}
              width={1000}
              alt={title}
            />
            <div
              className={markdownStyles['markdown']}
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
