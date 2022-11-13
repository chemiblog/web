import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
  FooterWrapper,
  FooterSocialWrapper,
  FooterSocialIcons,
  P,
} from "../elements"

export const Footer = () => {

  const data = useStaticQuery(graphql`
    query {
      linkedin: file(relativePath: { eq: "linkedin.svg" }) {
        publicURL
      }
      twitter: file(relativePath: { eq: "twitter.svg" }) {
        publicURL
      }
      facebook: file(relativePath: { eq: "facebook.svg" }) {
        publicURL
      }
      telegram: file(relativePath: { eq: "telegram.svg" }) {
        publicURL
      }
      github: file(relativePath: { eq: "github.svg" }) {
        publicURL
      }
    }
  `)

  return (
    <FooterWrapper>
      <FooterSocialWrapper>
        <FooterSocialIcons>
          <a
            href="https://linkedin.com"
            rel="noopener noreferrer"
          >
            <img src={data.linkedin.publicURL} alt="linkedin logo" />
          </a>
          <a
            href="https://twitter.com"
            rel="noopener noreferrer"
          >
            <img src={data.twitter.publicURL} alt="twitter logo" />
          </a>
          <a
            href="https://facebook.com"
            rel="noopener noreferrer"
          >
            <img src={data.facebook.publicURL} alt="facebook logo" />
          </a>
          <a href="https://t.me" rel="noopener noreferrer">
            <img src={data.telegram.publicURL} alt="telegram logo" />
          </a>
          <a
            href="https://github.com"
            rel="noopener noreferrer"
          >
            <img src={data.github.publicURL} alt="github logo" />
          </a>
        </FooterSocialIcons>
        <P size="xSmall" color="dark3">
          &copy; {new Date().getFullYear()} | Powered by <a href="https://biodasturchi.uz">Biodasturchi</a>
        </P>
      </FooterSocialWrapper>
    </FooterWrapper>
  )
}
