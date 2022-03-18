import { GetStaticProps, NextPageContext } from "next";
import { useSession, getSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
import { SocialList } from "../components/SocialList";
import { ExternalLinks } from "../components/ExternalLinks";
import { PostList } from "../components/PostList";
import { PostCategoriesList } from "../components/PostCategoriesList";

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
  session: any;
};

export default function Index({ posts, tags, pagination }: Props) {
  const { data: session } = useSession();
  const url = "/";
  console.log("session");
  console.log(session);
  if (session) {
    return (
      <Layout>
        <BasicMeta url={url} />
        <OpenGraphMeta url={url} />
        <TwitterCardMeta url={url} />
        <div className="container">
          <div>
            <header>
              <h1>La Marmezette</h1>
              <span className="handle">Par Karen</span>
            </header>
            <section>
              <h2>Dernières Nouvelles</h2>
              <PostList posts={posts} tags={tags} pagination={pagination} />
            </section>
          </div>
        </div>
        <div className="aside">
          <h5>Liens utiles</h5>
          <ExternalLinks />
          <h5>Categories</h5>
          <PostCategoriesList tags={tags} />
          <h5>Réseaux "Sociaux"</h5>
          <SocialList />
        </div>
        <style jsx>{`
          .container {
            display: flex;
            flex-direction: column;
            flex: 1 1 auto;
            padding: 0 1.5rem;
            max-width: 900px;
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
            text-underline-offset: 8px;
          }
          h5 {
            margin: 16px 0px 8px;
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
              font-size: 2rem;
            }
          }
        `}</style>
      </Layout>
    );
  }
  return (
    <>
      <span>Not signed in </span>
      <br />
      <a
        href={`/api/auth/signin`}
        onClick={(e) => {
          e.preventDefault();
          signIn();
        }}
      >
        Sign in
      </a>
    </>
  );
}

/* export const getStaticProps: GetStaticProps = async (
  context: NextPageContext
) => {
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
      session: await getSession(context),
    },
  };
}; */

// Export the `session` prop to use sessions with Server Side Rendering
export async function getServerSideProps(context: NextPageContext) {
  return {
    props: {
      session: await getSession(context),
    },
  };
}
