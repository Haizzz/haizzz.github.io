import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

declare interface SEOProps {
  title: string;
}

export const SEO = (props: SEOProps) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            keywords
            url
          }
        }
      }
    `
  );
  return (
    <Helmet>
      <title>{props.title}</title>
      <meta name={'description'} content={site.siteMetadata.description} />
      <meta name={'author'} content={site.siteMetadata.author} />
      <meta name={'keywords'} content={site.siteMetadata.keywords.join(', ')} />
    </Helmet>
  );
};
