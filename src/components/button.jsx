import React from "react"
import { Link } from "gatsby"

const Button = ({ linkUrl, linkText }) => {
  return (
    <div className="">
      <Link to={linkUrl} className="">
        {linkText}
      </Link>
    </div>
  )
}

export default Button
