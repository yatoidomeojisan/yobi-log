import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from 'gatsby'

const Bio = () => {
    return (
        <div className="max-w-screen-md mx-auto mt-20 mb-10">
            <h2 className="text-xl mb-4">Author</h2>
            <div className="">
                <StaticImage src="../images/me.jpg" alt="me" imgClassName="rounded-full" className="inline-block mb-4 mr-4 float-left"/>
                <p className="">雇止め間近のアラフォーエンジニア。新天地を求めて予備試験に挑戦中。R6予備試験合格を目指しています。工学部卒で法律の「ほ」も知らないところからのスタート。R2から勉強開始して、R4、R5と二度受験して玉砕中。R6で三度目の正直となるか。</p>
                <p>詳細な自己紹介は<Link to="/blog/introduction" className="underline">こちら</Link>。</p>
            </div>
            <div className="clear-both"></div>
        </div>
    )
}

export default Bio