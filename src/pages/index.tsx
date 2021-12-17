import { GetStaticProps } from "next";

import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
import { SocialList } from "../components/SocialList";
import { PostList } from "../components/PostList";

import config from "../lib/config";
import { countPosts, listPostContent, PostContent } from "../lib/posts";
import { listTags, TagContent } from "../lib/tags";

type Props = {
  posts: PostContent[];
  tags: TagContent[];
  pagination: {
    current: number;
    pages: number;
  };
};

export default function Index({ posts, tags, pagination }: Props) {
  const url = "/";
  return (
    <Layout>
      <BasicMeta url={url} />
      <OpenGraphMeta url={url} />
      <TwitterCardMeta url={url} />
      <div className="container">
        <header>
          <h1>
            La Marmezette
          </h1>
          <span className="handle">Par Karen</span>
        </header>
        <section>
          <h2>Dernières Nouvelles</h2>
          <PostList posts={posts} tags={tags} pagination={pagination} />
        </section>
        <SocialList />
      </div>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          flex: 1 1 auto;
          padding: 0 1.5rem;
          margin: 0 auto;
          max-width: 1200px;
          width: 100%;
        }
        h1 {
          font-size: 2.5rem;
          margin: 0;
          font-weight: 500;
        }
        h2 {
          font-size: 1.5rem;
          font-weight: 400;
          line-height: 1.25;
          text-decoration: underline;
        }
        .fancy {
          color: #15847d;
        }
        .handle {
          display: inline-block;
          margin-top: 0.275em;
          color: #9b9b9b;
          letter-spacing: 0.05em;
        }

        @media (min-width: 769px) {
          h1 {
            font-size: 3rem;
          }
          h2 {
            font-size: 2.25rem;
          }
        }
      `}</style>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = listPostContent(1, config.posts_per_page);
  const tags = listTags();
  const pagination = {
    current: 1,
    pages: Math.ceil(countPosts() / config.posts_per_page),
  };
  return {
    props: {
      posts,
      tags,
      pagination,
    },
  };
};
