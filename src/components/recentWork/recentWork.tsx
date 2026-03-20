import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const SUBSTACK_URL = "https://open.substack.com/pub/anhvietle";

export const RecentWork = () => {
  const data = useStaticQuery(graphql`
    query RecentSubstackPosts {
      allFeedSubstack(sort: { fields: pubDate, order: DESC }, limit: 5) {
        nodes {
          title
          link
        }
      }
    }
  `);

  return (
    <>
      <h3>Recent writing</h3>
      <ul>
        {data.allFeedSubstack.nodes.map((post) => (
          <li key={post.link}>
            <a href={post.link}>{post.title}</a>
          </li>
        ))}
        <li>
          <a href={SUBSTACK_URL}>More on Substack →</a>
        </li>
      </ul>
    </>
  );
};
