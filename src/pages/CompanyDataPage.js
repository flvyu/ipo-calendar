import React from 'react'
import Layout from '../components/Layout'
import { Helmet } from 'react-helmet'
import { Typography, AppBar, Toolbar, Link } from '@material-ui/core'
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
      color: 'white'
  }
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
          <HomeIcon className={classes.homeIcon}/>
          <Typography
            className={classes.homeLink}
            to="/"
            component={RouterLink}
          >
            Home
          </Typography>
        </Toolbar>
      </AppBar>
      <Typography className={classes.title} component="h1" variant="h4">
        {`${name} Initial Public Offering`}
      </Typography>
    </Layout>
  )
}
