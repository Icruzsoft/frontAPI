import React from 'react';
import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

const BlogPage = () => (
  <Layout>
    <SEO title="Blog" />
    <div className="container">
      <h1>Blog</h1>
      <section className="posts">
        <div className="post">
          <Link to="/blog/my-first-post">My First Post</Link>
        </div>
      </section>
    </div>
  </Layout>
);

export default BlogPage;

