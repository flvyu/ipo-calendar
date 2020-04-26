import React from 'react'
import PropTypes from 'prop-types'
import { Box, Typography } from '@material-ui/core'
import useMediaQuery from '@material-ui/core/useMediaQuery'

const EXAMPLE_DATA = {
  date: '2020-04-03',
  exchange: 'NASDAQ Global',
  name: 'ZENTALIS PHARMACEUTICALS, LLC',
  numberOfShares: 7650000,
  price: '16.00-18.00',
  status: 'expected',
  symbol: 'ZNTL',
  totalSharesValue: 158355000
}
export default function IPOTable({ data }) {
  const isLargeScreen = useMediaQuery(theme => theme.breakpoints.up('lg'))
  return (
    <Box display="flex" justifyContent="center">
      {data.length === 0 ? (
        <Box width={isLargeScreen ? '40%' : '100%'} p={4} mt={2} borderRadius={10} boxShadow={2}>
          <Typography align="center">
            No data available for the current date range. Try selecting new dates.
          </Typography>
        </Box>
      ) : (
        data.map(ipo => <p key={ipo.name}>{ipo.name}</p>)
      )}
    </Box>
  )
}

IPOTable.propTypes = {
  data: PropTypes.array.isRequired
}
