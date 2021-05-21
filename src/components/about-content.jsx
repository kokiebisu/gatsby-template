import React from "react"
import Img from "gatsby-image"

import Button from "../components/button"

import styles from "./about-content.module.scss"

const AboutContent = ({
  heading,
  copy,
  image,
  imageAlt,
  imageFirst,
  button,
}) => {
  return (
    <section className="">
      <div className="">
        <h2 className="">{heading}</h2>
        <div
          dangerouslySetInnerHTML={{
            __html: copy,
          }}
        ></div>
        {button && <Button linkUrl={button.url} linkText={button.text} />}
      </div>

      <Img fluid={image} alt={imageAlt} className="" />
    </section>
  )
}

export default AboutContent
