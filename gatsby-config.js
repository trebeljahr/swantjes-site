require("dotenv").config()
module.exports = {
  siteMetadata: {
    title: `Swantje Furtaks Website`,
    description: `This is a page where I present the work I have been doing 
    over the past couple years. Stuff I have been writing, filming and drawing. It in a way is who I am.`,
    author: `Swantje Furtak`,
  },
  plugins: [
    {
      resolve: `gatsby-source-ghost`,
      options: {
        apiUrl: process.env.GHOST_URL,
        contentApiKey: process.env.GHOST_CONTENT_API_KEY,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Swantje Furtaks Website",
        short_name: "Swantje Furtaks Website",
        start_url: "/",
        background_color: "#19647E",
        theme_color: "#19647E",
        display: "standalone",
        icon: "src/assets/images/icon.jpeg",
        crossOrigin: `use-credentials`,
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require(`postcss-preset-env`)({ stage: 0 })],
      },
    },
  ],
}
