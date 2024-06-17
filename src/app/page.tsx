import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { PostPreview } from "@/app/_components/post-preview";
import Header from "@/app/_components/header";
import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";

export default function Index() {
  const allPosts = getAllPosts();

  return (
    <main>
      <div className="header-bg absolute top-0 left-0 right-0 -z-50 w-full h-[1100px] bg-gradient-to-b from-amber-100 to-transparent max-h-[1100px] overflow-hidden"></div>
      <Container>
        <Header />
        <section className="relative pt-20 py-10 lg:pt-12 lg:pb-24">
          <h3 className="text-center mb-16 font-bold text-4xl md:text-6xl lg:text-7xl leading-tight ">
            <span className="font-light">See what we've</span>
            <br /> written lately
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-[30px] gap-y-[65px]">
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
