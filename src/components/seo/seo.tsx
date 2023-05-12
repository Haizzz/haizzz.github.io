import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

declare interface SEOProps {
  title: string
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
  )
  const gtag = `
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push();
  function gtag(){dataLayer.push(arguments);}

  gtag('js', new Date()); 
  gtag('config', 'G-YZRXFJELKT');
  `
  return (
    <Helmet>
      <title>{props.title}</title>
      <meta name={'description'} content={site.siteMetadata.description} />
      <meta name={'author'} content={site.siteMetadata.author} />
      <meta name={'keywords'} content={site.siteMetadata.keywords.join(', ')} />
      {/* Google tag (gtag.js) */}
      <script src='https://www.googletagmanager.com/gtag/js?id=G-YZRXFJELKT'>{gtag}</script>
      <script>{gtag}</script>
    </Helmet>
  )
}
