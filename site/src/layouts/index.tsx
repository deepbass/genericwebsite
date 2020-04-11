import * as React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from '../components/Header'
import LayoutRoot from '../components/LayoutRoot'
import { SiteMetaData } from '../models/SiteMetaData'
import Footer from '../components/Footer'

interface StaticQueryProps {
  site: {
    siteMetadata: SiteMetaData
  }
}

const IndexLayout: React.FC = ({ children }) => (
  <StaticQuery
    query={graphql`
      query IndexLayoutQuery {
        site {
          siteMetadata {
            title
            description
            links {
              title
              url
            }
          }
        }
      }
    `}
    render={(data: StaticQueryProps) => (
      <LayoutRoot>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: data.site.siteMetadata.description },
            { name: 'keywords', content: data.site.siteMetadata.keywords }
          ]}
        />
        <Header title={data.site.siteMetadata.title} menuLinks={data.site.siteMetadata.links} />
        {children}
        <Footer />
      </LayoutRoot>
    )}
  />
)

export default IndexLayout
