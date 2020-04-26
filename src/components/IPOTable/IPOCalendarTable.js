import {
  Box,
  Chip,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@material-ui/core'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import React from 'react'
import { formatDate, formatPrice } from '../../helpers'
import DataNotAvailable from './DataNotAvailable'

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14,
    width: 'auto'
  }
}))(TableCell)

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default
    }
  }
}))(TableRow)

const useStyles = makeStyles({
  root: {
    width: '100%'
  },
  table: {
    minWidth: 1200,
    overflowX: 'scroll'
  }
})

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

export default function IPOCalendarTable({ data }) {
  const classes = useStyles()

  return (
    <Box display="flex" justifyContent="center" mt={4}>
      {data.length === 0 ? (
        <DataNotAvailable />
      ) : (
        <TableContainer component={Paper} className={classes.root}>
          <Table className={classes.table} aria-label="IPO information table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Company</StyledTableCell>
                <StyledTableCell align="center">Symbol</StyledTableCell>
                <StyledTableCell align="center">Price</StyledTableCell>
                <StyledTableCell align="center">Expected Date</StyledTableCell>
                <StyledTableCell align="center">Shares</StyledTableCell>
                <StyledTableCell align="center">Volume</StyledTableCell>
                <StyledTableCell align="center">Status</StyledTableCell>
                <StyledTableCell align="center">Exchange</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map(row => (
                <StyledTableRow key={`${row.name}-${row.symbol}`}>
                  <StyledTableCell component="th" scope="row">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <Chip label={row.symbol} />
                  </StyledTableCell>
                  <StyledTableCell align="center">{formatPrice(row.price)}</StyledTableCell>
                  <StyledTableCell align="center">{formatDate(row.date)}</StyledTableCell>
                  <StyledTableCell align="center">
                    {row.numberOfShares.toLocaleString()}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {formatPrice(row.totalSharesValue.toLocaleString())}
                  </StyledTableCell>
                  <StyledTableCell align="center">{row.status}</StyledTableCell>
                  <StyledTableCell align="center">{row.exchange}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  )
}

IPOCalendarTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: '',
      symbol: '',
      price: '',
      numberOfShares: 0,
      totalSharesValue: 0,
      date: '',
      status: '',
      exchange: ''
    })
  )
}

IPOCalendarTable.defaultProps = {
  data: EXAMPLE_DATA
}
