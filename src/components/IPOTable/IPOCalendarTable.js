import {
  Box,
  Chip,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination
} from '@material-ui/core'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { formatDate, formatPrice } from '../../helpers'
import DataNotAvailable from './DataNotAvailable'

const DEFAULT_ROWS_PER_PAGE = 25

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.primary.light
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
  container: {
    maxHeight: 500
  },
  table: {
    minWidth: 1200,
    overflowX: 'scroll'
  }
})

export default function IPOCalendarTable({ data }) {
  const classes = useStyles()

  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(DEFAULT_ROWS_PER_PAGE)

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  return (
    <Box display="flex" justifyContent="center" mt={4}>
      {data.length === 0 ? (
        <DataNotAvailable />
      ) : (
        <Paper className={classes.root}>
          <TableContainer className={classes.container}>
            <Table stickyHeader className={classes.table} aria-label="IPO information table">
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
                {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => (
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
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={data.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </Paper>
      )}
    </Box>
  )
}

IPOCalendarTable.propTypes = {
  /**
   * Shape of data to populate the table
   */
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      symbol: PropTypes.string,
      price: PropTypes.string,
      numberOfShares: PropTypes.number,
      totalSharesValue: PropTypes.number,
      date: PropTypes.string,
      status: PropTypes.string,
      exchange: PropTypes.string
    })
  )
}

IPOCalendarTable.defaultProps = {
  data: [
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
}
