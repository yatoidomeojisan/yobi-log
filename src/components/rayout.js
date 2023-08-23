import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

const Rayout = ({ children }) => {

    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    description
                }
            }
        }
    `)

    const siteTitle = data.site.siteMetadata.title

    return (
      <div className="container max-w-screen-md mx-auto px-5">
        <header className="mt-10 mb-20">
            <h1 className="text-2xl text-center"><Link to="/" className="text-inherit">{siteTitle}</Link></h1>
            <p className="text-center">R6予備試験短答まであと<span className="text-red-500">{Math.floor((new Date('2024/07/14 09:00:00').getTime() - new Date().getTime())/(1000*60*60*24))}</span>日</p>
        </header>
        <main className="">
            {children}
        </main>
        <footer className="mt-20 mb-4 text-center">
            <p>© {new Date().getFullYear()} {siteTitle}</p>
        </footer>
      </div>
    )
  }
  
export default Rayout