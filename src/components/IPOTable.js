import React from 'react'
import PropTypes from 'prop-types'
import { Box, Typography } from '@material-ui/core'
import useMediaQuery from '@material-ui/core/useMediaQuery'

const EXAMPLE_DATA = {
  symbol: 'ZNTL',
  exchange: 'NASDAQ Global',
  name: 'ZENTALIS PHARMACEUTICALS, LLC',

  date: '2020-04-03',
  numberOfShares: 7650000,
  price: '16.00-18.00',
  status: 'expected',
  totalSharesValue: 158355000
}

const DataNotAvailable = ({ message }) => {
  const isLargeScreen = useMediaQuery(theme => theme.breakpoints.up('sm'))
  return (
    <Box width={isLargeScreen ? '40%' : '100%'} p={4} mt={2} borderRadius={10} boxShadow={2}>
      <Typography align="center">{message}</Typography>
    </Box>
  )
}

DataNotAvailable.propTypes = {
  message: PropTypes.string
}

DataNotAvailable.defaultProps = {
  message: 'No data available for the current date range. Try selecting new dates.'
}

export default function IPOTable({ data }) {
  return (
    <Box display="flex" justifyContent="center">
      {data.length === 0 ? <DataNotAvailable /> : data.map(ipo => <p key={ipo.name}>{ipo.name}</p>)}
    </Box>
  )
}

IPOTable.propTypes = {
  data: PropTypes.array.isRequired
}
