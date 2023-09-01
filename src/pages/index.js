import React from "react"
import Rayout from '../components/rayout'
import Seo from '../components/seo'
import Bio from '../components/bio'
import { graphql, Link } from "gatsby"
import moment from 'moment'


const IndexPage = ({data}) => {
    const posts = data.allMdx.nodes;

    return (
        <Rayout>
            <Bio />
            <div className="mt-10">
                <h2 className="text-xl mb-4">Blog</h2>
                {posts.map(post => (
                    <div key={post.id} className="flex">
                        <div className="w-28 flex-none">{moment(post.frontmatter.date).format(`YYYY-MM-DD`)}</div>
                        <div><Link className="text-indigo-900" to={`/blog/${post.fields.slug}`}>{post.frontmatter.title}</Link>{post.frontmatter.draft ? <span className="ml-2 font-bold text-red-500">[draft]</span> : null}</div>
                    </div>
                ))}
            </div>
        </Rayout>
    )
}

export default IndexPage

export const Head = () => <Seo title="" />

export const pageQuery = graphql`
query MyQuery ($draft: [Boolean]!) {
    allMdx(
        filter: { frontmatter: { draft: { in: $draft } } }
        sort: {frontmatter: {date: DESC}}
    ) {
        nodes {
            id
            frontmatter {
                date
                title
                draft
            }
            internal {
                contentFilePath
            }
            fields {
                slug
            }
            excerpt(pruneLength: 100)
        }
    }
}
`