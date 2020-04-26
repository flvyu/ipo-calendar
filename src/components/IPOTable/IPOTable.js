import React from 'react'
import PropTypes from 'prop-types'
import { Box } from '@material-ui/core'
import DataNotAvailable from './DataNotAvailable'
import IPOCalendarTable from './IPOCalendarTable'

const EXAMPLE_DATA = [
  {
    name: 'ZENTALIS PHARMACEUTICALS, LLC',
    symbol: 'ZNTL',
    price: '16.00-18.00',
    numberOfShares: 7650000,
    totalSharesValue: 158355000,
    date: '2020-04-03',
    status: 'expected',
    exchange: 'NASDAQ Global'
  },
  {
    name: 'ZENTALIS PHARMACEUTICALS, LLC',
    symbol: 'ZNTL',
    price: '16.00-18.00',
    numberOfShares: 7650000,
    totalSharesValue: 158355000,
    date: '2020-04-03',
    status: 'expected',
    exchange: 'NASDAQ Global'
  },
  {
    name: 'ZENTALIS PHARMACEUTICALS, LLC',
    symbol: 'ZNTL',
    price: '16.00-18.00',
    numberOfShares: 7650000,
    totalSharesValue: 158355000,
    date: '2020-04-03',
    status: 'expected',
    exchange: 'NASDAQ Global'
  },
  {
    name: 'ZENTALIS PHARMACEUTICALS, LLC',
    symbol: 'ZNTL',
    price: '16.00-18.00',
    numberOfShares: 7650000,
    totalSharesValue: 158355000,
    date: '2020-04-03',
    status: 'expected',
    exchange: 'NASDAQ Global'
  },
  {
    name: 'ZENTALIS PHARMACEUTICALS, LLC',
    symbol: 'ZNTL',
    price: '16.00-18.00',
    numberOfShares: 7650000,
    totalSharesValue: 158355000,
    date: '2020-04-03',
    status: 'expected',
    exchange: 'NASDAQ Global'
  },
  {
    name: 'ZENTALIS PHARMACEUTICALS, LLC',
    symbol: 'ZNTL',
    price: '16.00-18.00',
    numberOfShares: 7650000,
    totalSharesValue: 158355000,
    date: '2020-04-03',
    status: 'expected',
    exchange: 'NASDAQ Global'
  },
  {
    name: 'ZENTALIS PHARMACEUTICALS, LLC',
    symbol: 'ZNTL',
    price: '16.00-18.00',
    numberOfShares: 7650000,
    totalSharesValue: 158355000,
    date: '2020-04-03',
    status: 'expected',
    exchange: 'NASDAQ Global'
  },
  {
    name: 'ZENTALIS PHARMACEUTICALS, LLC',
    symbol: 'ZNTL',
    price: '16.00-18.00',
    numberOfShares: 7650000,
    totalSharesValue: 158355000,
    date: '2020-04-03',
    status: 'expected',
    exchange: 'NASDAQ Global'
  },
  {
    name: 'ZENTALIS PHARMACEUTICALS, LLC',
    symbol: 'ZNTL',
    price: '16.00-18.00',
    numberOfShares: 7650000,
    totalSharesValue: 158355000,
    date: '2020-04-03',
    status: 'expected',
    exchange: 'NASDAQ Global'
  }
]

export default function IPOTable({ data }) {
  return (
    <Box display="flex" justifyContent="center" mt={4}>
      <IPOCalendarTable data={EXAMPLE_DATA} />
    </Box>
  )
}

IPOTable.propTypes = {
  data: PropTypes.array.isRequired
}
