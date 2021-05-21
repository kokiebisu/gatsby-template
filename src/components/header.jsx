import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { FaInstagram, FaTwitter } from "react-icons/fa"

import styles from "./header.module.scss"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      siteMetadata: site {
        siteMetadata {
          social {
            instagram
            twitter
          }
        }
      }
    }
  `)

  return (
    <div className="">
      <header className="">
        <nav className="">
          <span>
            <Link to="/" className="">
              Voyager
            </Link>
          </span>

          <div className="">
            <Link to="/" className="" activeClassName={styles.navItemActive}>
              Home
            </Link>
            <Link
              to="/blog"
              className=""
              activeClassName={styles.navItemActive}
              partiallyActive={true}
            >
              Blog
            </Link>
            <Link
              to="/about"
              className=""
              activeClassName={styles.navItemActive}
            >
              About
            </Link>
            <a
              href={`https://www.instagram.com/${data.siteMetadata.siteMetadata.social.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <FaInstagram className="" alt="instagram icon link" />
            </a>
            <a
              href={`https://www.twitter.com/${data.siteMetadata.siteMetadata.social.twitter}`}
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <FaTwitter className="" alt="twitter icon link" />
            </a>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Header
