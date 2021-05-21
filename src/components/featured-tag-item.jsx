import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const FeaturedTagItem = ({ tag, heading, image, imageAlt }) => {
  return (
    <div className="">
      <Link to={`/blog/tags/${tag}`}>
        <h3 className="">{heading}</h3>
        <Img fluid={image} alt={imageAlt} />
      </Link>
    </div>
  )
}

export default FeaturedTagItem
