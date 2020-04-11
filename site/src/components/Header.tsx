/* eslint-disable no-shadow */
import * as React from 'react'
import { Link } from 'gatsby'
import {
  List,
  ListItem,
  AppBar,
  Typography,
  makeStyles,
  Theme,
  createStyles,
  Toolbar,
  IconButton,
  ListItemText,
  Drawer,
  useMediaQuery,
  useTheme
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { MenuLink } from '../models/SiteMetaData'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    title: {
      flexGrow: 1
    },
    appBar: {
      backgroundColor: theme.palette.background.default
    },
    menuLink: {
      marginRight: theme.spacing(2),
      textDecoration: 'none',
      color: theme.palette.text.primary
    },
    homeLink: {
      flexGrow: 1,
      textDecoration: 'none',
      color: theme.palette.text.primary
    },
    drawerLink: {
      textDecoration: 'none',
      color: theme.palette.grey[900]
    },
    user: {
      textAlign: 'right'
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    list: {
      width: '250px'
    },
    active: {
      color: theme.palette.primary.main
    }
  })
)

interface HeaderProps {
  title: string
  menuLinks: MenuLink[]
}

const Header: React.FC<HeaderProps> = ({ title, menuLinks }) => {
  const classes = useStyles()
  const [drawerOpen, setDrawerOpen] = React.useState<boolean>(false)

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
      return
    }

    setDrawerOpen(open)
  }
  const theme = useTheme()
  const biggerThanMobile = useMediaQuery(theme.breakpoints.up('md'))

  const mobileMenuDrawer = (links: MenuLink[]) => (
    <div className={classes.list} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
      <List>
        {links.map(menuLink => (
          <ListItem button key={menuLink.title}>
            <ListItemText
              primary={
                <Link className={classes.drawerLink} to={menuLink.url}>
                  {menuLink.title}
                </Link>
              }
            />
          </ListItem>
        ))}
      </List>
    </div>
  )

  const mobileAppBar = ({ title, menuLinks }: HeaderProps) => (
    <AppBar className={classes.appBar} position="static">
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} aria-haspopup="true" aria-label="menu" onClick={toggleDrawer(true)}>
          <MenuIcon />
        </IconButton>
        <Link className={classes.homeLink} to="/">
          <Typography className={classes.title} variant="h6">
            {title}
          </Typography>
        </Link>
      </Toolbar>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        {mobileMenuDrawer(menuLinks)}
      </Drawer>
    </AppBar>
  )

  const desktopAppBar = ({ title, menuLinks }: HeaderProps) => (
    <AppBar className={classes.appBar} position="static">
      <Toolbar>
        <Link className={classes.homeLink} to="/">
          <Typography className={classes.title} variant="h6">
            {title}
          </Typography>
        </Link>
        {menuLinks.map(menuLink => {
          return (
            <Link className={classes.menuLink} to={menuLink.url}>
              <Typography>{menuLink.title}</Typography>
            </Link>
          )
        })}
      </Toolbar>
    </AppBar>
  )

  return biggerThanMobile ? desktopAppBar({ title, menuLinks }) : mobileAppBar({ title, menuLinks })
}

export default Header
