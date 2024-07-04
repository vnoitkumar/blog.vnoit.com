import Container from '@/app/_components/container';
import React from 'react';
import { PostPreview } from '@/app/_components/post-preview';
import Header from '@/app/_components/header';
import { getAllPosts } from '@/lib/api';

export default function Index() {
  const allPosts = getAllPosts();

  return (
    <main>
      <div className='header-bg absolute top-0 left-0 right-0 -z-50 w-full h-[1100px] bg-gradient-to-b from-amber-100 to-transparent max-h-[1100px] overflow-hidden'></div>
      <Container>
        <Header />
        <section className='relative pt-4 pb-24'>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-x-[30px] gap-y-[65px]'>
            {allPosts.map((post) => (
              <PostPreview
                key={post.slug}
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
                slug={post.slug}
                excerpt={post.excerpt}
                tag={post.tag}
              />
            ))}
          </div>
        </section>
      </Container>
    </main>
  );
}
