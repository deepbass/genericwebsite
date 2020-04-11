import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Container } from '@material-ui/core'
import IndexLayout from '../layouts'
import Hero from '../components/Hero'

interface PageTemplateProps {
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
        author: {
          name: string
          url: string
        }
      }
    }
    mdx: {
      body: string
      excerpt: string
      frontmatter: {
        title: string
        description: string
      }
    }
  }
}

const PageTemplate: React.SFC<PageTemplateProps> = ({ data }) => {
  return (
    <IndexLayout>
      <Hero />
      <Container maxWidth="md">
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </Container>
    </IndexLayout>
  )
}

export default PageTemplate

export const query = graphql`
  query PageTemplateQuery($slug: String!) {
    site {
      siteMetadata {
        title
        description
        author {
          name
          url
        }
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      body
      excerpt
      frontmatter {
        title
      }
    }
  }
`
