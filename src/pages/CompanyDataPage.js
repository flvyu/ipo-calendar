import React from 'react'
import Layout from '../components/Layout'
import { Helmet } from 'react-helmet'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { PRIMARY } from '../theme/theme'

const useStyles = makeStyles((theme) => ({
  title: {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightBold,
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
      <Typography className={classes.title} component="h1" variant="h4">
        {`${name} Initial Public Offering`}
      </Typography>
    </Layout>
  )
}
