import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"

import Layout from "../../components/layout"

import styles from "./authors.module.scss"

const Authors = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: {
          frontmatter: { type: { eq: "post" } }
          published: { eq: true }
        }
      ) {
        group(field: frontmatter___author) {
          fieldValue
          totalCount
        }
      }
    }
  `)

  return (
    <Layout title="All Blog Authors" pathName="/blog/authors">
      <h1 className="">Authors</h1>
      <section className="">
        {data.allMarkdownRemark.group.map(author => (
          <div key={author.fieldValue}>
            <Link to={`/blog/authors/${author.fieldValue}`}>
              <div className="">
                <h2 className="">
                  {author.fieldValue} ({author.totalCount})
                </h2>
              </div>
            </Link>
          </div>
        ))}
      </section>
    </Layout>
  )
}

export default Authors
