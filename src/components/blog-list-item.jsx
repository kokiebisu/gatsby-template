import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const BlogListItem = ({ node }) => {
  return (
    <div key={node.id}>
      <Link to={`/blog/${node.fields.slug}`} className="">
        <div className="">
          <div className="">
            <h2 className="">{node.frontmatter.title}</h2>
            <p className="">
              by {node.frontmatter.author} on {node.frontmatter.date}
            </p>
            {node.frontmatter.tags.length > 0 && (
              <p className="">tags: {node.frontmatter.tags.join(", ")}</p>
            )}
            <p>{node.frontmatter.excerpt}</p>
          </div>
          <div className="">
            <Img
              fluid={node.frontmatter.image.childImageSharp.fluid}
              alt={node.frontmatter.imageAlt}
            />
          </div>
        </div>
      </Link>
    </div>
  )
}

export default BlogListItem
