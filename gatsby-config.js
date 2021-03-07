module.exports = {
  siteMetadata: {
    title: `Anh Le`,
    description: `I'm Anh, a Software Engineer at Canva. Previously I worked as a consultant at PwC and a Backend Engineer at Unocart. Outside of work I'm a board member at TEDxUWA`,
    author: `Anh Le`,
    url: 'https://imanhle.com',
    keywords: [
      'Anh Le',
      'Anh',
      'Anh Viet Le',
      'Software Engineer',
      'Developer',
      'Programmer',
      'TEDxUWA',
      'Canva',
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Anh Le`,
        short_name: `Anh`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
