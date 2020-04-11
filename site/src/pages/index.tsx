import * as React from 'react'

import { Container, Typography, Grid, makeStyles, Theme, createStyles, Button, Paper, useMediaQuery, useTheme } from '@material-ui/core'
import { useStaticQuery, graphql, Link } from 'gatsby'
import IndexLayout from '../layouts'
import Hero from '../components/Hero'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    text: {
      textAlign: 'center'
    },
    section: {
      marginTop: '5vh'
    }
  })
)
const IndexPage = () => {
  const classes = useStyles()
  return (
    <IndexLayout>
      <Hero />
      <Container maxWidth="md">
        <Grid container alignItems="center" justify="center" direction="column">
          <Grid item container direction="column" alignItems="center" justify="center" className={classes.section}>
            <Typography variant="h3" className={classes.text} paragraph>
              The cheese
            </Typography>
            <Typography variant="body1" paragraph className={classes.text}>
              I love cheese, especially cream cheese smelly cheese. Dolcelatte edam pepper jack cheese triangles cheese and biscuits
              macaroni cheese melted cheese red leicester. Fondue macaroni cheese say cheese cheesy feet camembert de normandie ricotta
              mozzarella cheeseburger. Cream cheese hard cheese everyone loves roquefort brie blue castello danish fontina st. agur blue
              cheese. Red leicester paneer stilton caerphilly. St. agur blue cheese cheese and wine fromage. Croque monsieur cheese and wine
              taleggio the big cheese monterey jack melted cheese croque monsieur hard cheese. Cow who moved my cheese melted cheese
              bocconcini taleggio blue castello parmesan smelly cheese. Fromage frais caerphilly pecorino camembert de normandie. Mozzarella
              manchego cauliflower cheese. Cheese slices bocconcini boursin cow gouda cheese on toast manchego mascarpone. Cut the cheese
              croque monsieur edam danish fontina dolcelatte cream cheese caerphilly blue castello. Bavarian bergkase mascarpone goat smelly
              cheese stinking bishop the big cheese cauliflower cheese melted cheese. Manchego st. agur blue cheese. Hard cheese brie
              parmesan. Cheese triangles cheesy feet boursin macaroni cheese croque monsieur lancashire feta emmental. Jarlsberg fromage
              cheesy grin blue castello cauliflower cheese taleggio chalk and cheese lancashire. Airedale caerphilly blue castello
              port-salut the big cheese jarlsberg pecorino. Ricotta macaroni cheese port-salut. Roquefort the big cheese emmental feta
              fondue blue castello danish fontina taleggio. Mascarpone cheeseburger ricotta everyone loves monterey jack cheese and wine
              paneer monterey jack. Stilton queso brie gouda paneer cheese and biscuits edam when the cheese comes out everybody's happy.
              Emmental stinking bishop.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </IndexLayout>
  )
}

export default IndexPage
