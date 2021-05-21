import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          social {
            instagram
            twitter
          }
          mailchimpUrl
        }
      }
    }
  `)

  return (
    <div className="">
      <footer className="">
        <div className="">
          <span className="">Voyager</span>
          <p className="">Gatsby Starter Voyager is MIT Licensed.</p>
          <div>
            <a
              href="https://github.com/gregdferrell/gatsby-starter-voyager"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="" alt="github icon link" />
            </a>
          </div>
        </div>
        <div className="">
          <Link to="/" className="">
            Home
          </Link>
          <Link to="/blog" className="">
            Blog
          </Link>
          <Link to="/about" className="">
            About
          </Link>
          <hr />
          <div>
            <a
              href={data.site.siteMetadata.mailchimpUrl}
              target="__blank"
              className=""
            >
              Subscribe
            </a>
            |
            <a href="/rss.xml" className="">
              RSS
            </a>
            |
            <a href="/sitemap.xml" className="">
              Sitemap
            </a>
          </div>
        </div>
        <div className={}>
          <a
            href={`https://www.instagram.com/${data.site.siteMetadata.social.instagram}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="" alt="instagram icon link" />
          </a>
          <a
            href={`https://www.twitter.com/${data.site.siteMetadata.social.twitter}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="" alt="twitter icon link" />
          </a>
        </div>
      </footer>
    </div>
  )
}

export default Footer
