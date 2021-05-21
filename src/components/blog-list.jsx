import React from "react"

import BlogListItem from "./blog-list-item"

const BlogList = ({ data }) => {
  return (
    <section className="">
      {data.edges.map(({ node }) => (
        <BlogListItem key={node.id} node={node} />
      ))}
    </section>
  )
}

export default BlogList
