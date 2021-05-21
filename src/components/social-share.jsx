import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import { FaFacebook, FaPinterest, FaTwitter } from "react-icons/fa"

const SocialShare = ({ text, shareTitle, shareUrl }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          social {
            twitter
          }
        }
      }
    }
  `)

  return (
    <div className="">
      <span className="">{text}</span>
      <a
        href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}&via=${data.site.siteMetadata.social.twitter}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTwitter className="" />
      </a>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebook className="" />
      </a>
      <a
        href={`https://www.pinterest.com/pin/create/button/?url=${shareUrl}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaPinterest className="" />
      </a>
    </div>
  )
}

export default SocialShare
