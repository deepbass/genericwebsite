import * as React from 'react'
import { Box, Typography, makeStyles, Theme, createStyles, Grid, Container } from '@material-ui/core'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import Img from 'gatsby-image'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    hero: {
      height: '100%'
    },
    heroImage: {
      minHeight: '400px',
      height: '65vh',
      width: '100%',
      backgroundPosition: 'top center',
      backgroundRepeat: 'repeat-y',
      backgroundSize: 'cover'
    },
    logoImage: {
      height: '40vh',
      width: '40vh'
    },
    title: {
      fontWeight: 'bold',
      fontFamily: 'Work Sans, -apple-system, BlinkMacSystemFont, Roboto, sans-serif',
      marginBottom: 4
    }
  })
)

const Hero: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      backgroundImageFileName: file(relativePath: { eq: "images/hero.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      logoImageFileName: file(relativePath: { eq: "images/logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const classes = useStyles()
  return (
    <BackgroundImage className={classes.heroImage} fluid={data.backgroundImageFileName.childImageSharp.fluid} alt="">
      <Grid className={classes.hero} container direction="column" justify="center" alignItems="center" alignContent="center">
        <Img className={classes.logoImage} fluid={data.logoImageFileName.childImageSharp.fluid} />
      </Grid>
    </BackgroundImage>
  )
}

export default Hero
