import React from "react"
import { Link } from "gatsby"
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa"

import styles from "./prev-next.module.scss"

const PrevNext = ({ prevDetails, nextDetails }) => {
  return (
    <div className="">
      <div className="">
        {prevDetails && (
          <>
            {prevDetails.titleText && (
              <p className="">{prevDetails.titleText}</p>
            )}
            <Link to={prevDetails.linkPath} className="">
              <FaArrowCircleLeft className="" /> {prevDetails.linkText}
            </Link>
          </>
        )}
      </div>
      <div className="">
        {nextDetails && (
          <>
            {nextDetails.titleText && (
              <p className="">{nextDetails.titleText}</p>
            )}
            <Link to={nextDetails.linkPath} className="">
              {nextDetails.linkText} <FaArrowCircleRight className="" />
            </Link>
          </>
        )}
      </div>
    </div>
  )
}

export default PrevNext
