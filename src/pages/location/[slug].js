import Layout from "@/Components/Layout";
import PostContent from "@/Components/LocationContent/PostContent";
import { servicesArray } from "@/utils/locationData";
import Head from "next/head";

const getPostByName = (slugParams) => {
  return servicesArray.find((service) => service.slug === slugParams);
};

function PostDetailPage(props) {
  const post = props.selectedPost;
  console.log(post);
  if (!post) {
    return (
      <div className="">
        <p>Loading...</p>
      </div>
    );
  }
  return (
    <>
      <Head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-6ZHJ2LJG7C"
        ></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          {function gtag() {
            dataLayer.push(arguments);
          }}
          gtag('js', new Date()); gtag('config', 'G-6ZHJ2LJG7C');
        </script>
        <title>{post.metaTitle}</title>
        <meta property="og:title" content={post.metaTitle} key="title" />
        <meta name="description" content={post.metaDesc} />
      </Head>
      <Layout>
        <PostContent
          posts={post.slug}
          postHeading={post.heading}
          postpara={post.paragraph}
        />
      </Layout>
    </>
  );
}

export function getStaticProps(context) {
  const blogSlug = context.params.slug;
  console.log(blogSlug, "blogSlug");
  const post = getPostByName(blogSlug);
  return {
    props: {
      selectedPost: post,
    },
  };
}

export function getStaticPaths() {
  const paths = servicesArray.map((post) => ({
    params: { slug: post.slug },
  }));
  console.log(paths, "paths");
  return {
    paths: paths,
    fallback: "blocking",
  };
}

export default PostDetailPage;
