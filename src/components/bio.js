import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {
    return (
        <div className="max-w-screen-md mx-auto mt-20 mb-10">
            <h2 className="text-xl mb-4">Author</h2>
            <div className="">
                <StaticImage src="../images/me.jpg" alt="me" imgClassName="rounded-full" className="inline-block mb-4 mr-4 float-left"/>
                <p className="">雇止め間近のアラフォーエンジニアです。R6予備試験突破を目指しています。工学部卒で法律の「ほ」の字も知らないところからのスタート。</p>
            </div>
            <div className="clear-both"></div>
        </div>
    )
}

export default Bio