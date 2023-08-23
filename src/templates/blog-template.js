import React from "react"
import Rayout from '../components/rayout'
import { graphql, Link } from "gatsby"
import Seo from '../components/seo'
import Bio from '../components/bio'
import moment from 'moment'

const BlogPost = ({ data: {mdx: post} , children, pageContext }) => {

    const {previous, next} = pageContext

    return (
        <Rayout>
            <div className="blog-header my-10">
                <h1 className="text-3xl text-center">{post.frontmatter.title}</h1>
                <p className="text-slate-500 text-center">{moment(post.frontmatter.date).format(`YYYY-MM-DD`)}</p>
            </div>

            <div className="blog-content overflow-x-auto">
                {children}
            </div>

            <div className="md:flex justify-between mt-10">
                <div className="text-left">
                    {previous && (
                        <>
                            <p className="text-slate-500">previous</p>
                            <Link to={`/blog/${previous.fields.slug}`} rel="prev">
                                ← {previous.frontmatter.title}
                            </Link>
                        </>
                    )}
                </div>
                <div className="text-right">
                    {next && (
                        <>
                            <p className="text-slate-500">next</p>
                            <Link to={`/blog/${next.fields.slug}`} rel="next">
                                {next.frontmatter.title} →
                            </Link>
                        </>
                    )}
                </div>
            </div>

            <Bio />

        </Rayout>
    )
}

export default BlogPost

export const Head = ({ data: { mdx: post } }) => {
    return (
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
    )
}

export const query = graphql`
query MyQuery($id: String) {
    mdx(id: {eq: $id}) {
        id
        excerpt(pruneLength: 140)
        frontmatter {
            date
            title
        }
        internal {
            contentFilePath
        }
    }
}
`