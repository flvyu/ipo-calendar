import React from 'react'
import Layout from '../components/Layout'
import { Helmet } from 'react-helmet'
import { Typography, AppBar, Toolbar, IconButton, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Link as RouterLink } from '@reach/router'
import { Home as HomeIcon } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
  title: {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightBold,
  },
  homeLink: {
    textDecoration: 'none',
    color: 'white',
  },
  homeIcon: {
    color: 'white',
  },
  offset: theme.mixins.toolbar,
  companySpan: {
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.primary.dark,
  },
}))

export default function CompanyDataPage({ location }) {
  const classes = useStyles()
  const {
    name,
    symbol,
    price,
    date: ipoDate,
    numberOfShares,
    totalSharesValue,
    status,
    exchange,
  } = location.state.data
  return (
    <Layout>
      <Helmet>
        <title>{`${name} IPO`}</title>
        <meta
          name="description"
          content={`${name} Announces pricing of ${totalSharesValue} Initial Public Offering`}
        />
      </Helmet>
      <AppBar>
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit">
            <HomeIcon className={classes.homeIcon} />
          </IconButton>
          <Typography
            variant="h6"
            color="inherit"
            className={classes.homeLink}
            to="/"
            component={RouterLink}
          >
            Home
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.offset} />
      <Typography
        className={classes.title}
        align="center"
        component="h1"
        variant="h4"
      >
        {`${name} Initial Public Offering`}
      </Typography>
      <Box display="flex" justifyContent="center">
        <Box m={8} maxWidth="60%">
          <Typography align="center">
            In this page you will find information for{' '}
            <span className={classes.companySpan}>{name}</span> To find IPO
            information for other companies go to the <a href="/">Home</a> page to start
            searching.
          </Typography>
        </Box>
      </Box>
    </Layout>
  )
}
