/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `雇止めアラフォーエンジニア予備試験突破を目指す`,
    description: 'もうすぐ雇止め。後がないアラフォーエンジニアが新天地を求め、予備試験突破を目指します。',
    siteUrl: `https://yatoidome.github.io/yobilog`,
    social: {
      twitter: '',
    }
  },
  plugins: [
    "gatsby-plugin-postcss", 
    "gatsby-plugin-image", 
    "gatsby-plugin-sitemap", 
    "gatsby-plugin-sharp", 
    "gatsby-transformer-sharp", 
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    }, 
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/contents/blog`,
        name: `blog`,
      },
    },
		{
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          `gatsby-remark-images`,
          `gatsby-remark-prismjs`,
        ],
        mdxOptions: {
          remarkPlugins: [
            require(`remark-gfm`),
          ],
        }
      },
    },
  ]
};