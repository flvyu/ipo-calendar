import React from 'react'
import Layout from '../components/Layout'
import { Helmet } from 'react-helmet'
import { Typography, AppBar, Toolbar, IconButton, Box } from '@material-ui/core'
import { formatDate, formatPrice } from '../helpers/FormatHelpers'
import { makeStyles } from '@material-ui/core/styles'
import { Link as RouterLink } from '@reach/router'
import { Home as HomeIcon } from '@material-ui/icons'
import { COMPANY_INFORMATION_FIELDS } from '../constants/ui_contants'
import { EMPTY_STRING } from '../constants/util_constants'

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
  fieldTitle: {
    color: theme.palette.primary.dark,
    fontWeight: theme.typography.fontWeightBold,
  },
  row: {
    borderBottom: '1px solid gray',
    margin: theme.spacing(2),
  },
}))

export default function CompanyDataPage({ location }) {
  const classes = useStyles()
  const data = location.state.data
  const { name, totalSharesValue } = data
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
            information for other companies go to the <a href="/">Home</a> page
            to start searching.
          </Typography>
        </Box>
      </Box>
      <div>
        {COMPANY_INFORMATION_FIELDS.map((field) => {
          let currentData = data[field.dataKey]
          switch (field.dataKey) {
            case 'date':
              currentData = formatDate(currentData)
              break
            case 'price':
              currentData = formatPrice(currentData)
              break
            case 'numberOfShares':
              currentData = currentData
                ? currentData.toLocaleString()
                : EMPTY_STRING
              break
            case 'totalSharesValue':
              currentData = currentData
                ? formatPrice(currentData.toLocaleString())
                : EMPTY_STRING
              break
            default:
          }

          return (
            <div className={classes.row}>
              <Typography variant="h6" className={classes.fieldTitle}>
                {field.title}
              </Typography>
              <Typography>{currentData}</Typography>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}
