import React from "react"

import SEO from "./seo"
import Header from "./header"
import Footer from "./footer"

const Layout = props => {
  const {
    children,
    layoutFullWidth,
    isArticle,
    title,
    description,
    image,
    author,
    pathName,
    datePublished,
  } = props

  return (
    <>
      <SEO
        isArticle={isArticle}
        title={title}
        description={description}
        image={image}
        author={author}
        pathName={pathName}
        datePublished={datePublished}
      />
      <Header />
      {layoutFullWidth ? (
        <section className="">{children}</section>
      ) : (
        <section className="">{children}</section>
      )}
      <Footer />
    </>
  )
}

export default Layout
