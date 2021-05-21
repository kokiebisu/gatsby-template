import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const EmailSignup = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          mailchimpUrl
        }
      }
    }
  `)

  return (
    <div className="">
      <h2 className="">Subscribe to this blog!</h2>
      <form
        className=""
        action={data.site.siteMetadata.mailchimpUrl}
        method="post"
        name="mc-embedded-subscribe-form"
        target="_blank"
        noValidate
      >
        <fieldset className="">
          <div className="">
            <label className="" htmlFor="email-address">
              Email Address
            </label>
            <input
              className=""
              placeholder="Your Email Address"
              type="text"
              name="EMAIL"
              id="email-address"
            />
            <input
              className=""
              type="submit"
              name="subscribe"
              value="Subscribe"
            />
          </div>
        </fieldset>
      </form>
    </div>
  )
}

export default EmailSignup
