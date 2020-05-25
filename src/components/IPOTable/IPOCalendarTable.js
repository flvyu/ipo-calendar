import {
  Box,
  Chip, Link,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow
} from '@material-ui/core'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { EMPTY_STRING } from '../../constants/util_constants'
import { formatDate, formatPrice } from '../../helpers'
import DataNotAvailable from './DataNotAvailable'

const DEFAULT_ROWS_PER_PAGE = 25

const StyledTableCell = withStyles(theme => ({
  root: {
    width: 200
  },
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.primary.light,
    width: 200
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
    <Box display="flex" justifyContent="center" mt={4} flexDirection="column" alignItems="center">
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
                  <StyledTableCell align="center">Expected Price</StyledTableCell>
                  <StyledTableCell align="center">Expected Date</StyledTableCell>
                  <StyledTableCell align="center">Shares</StyledTableCell>
                  <StyledTableCell align="center">Volume</StyledTableCell>
                  <StyledTableCell align="center">Status</StyledTableCell>
                  <StyledTableCell align="center">Exchange</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map(
                    ({
                      name,
                      symbol,
                      price,
                      date: ipoDate,
                      numberOfShares,
                      totalSharesValue,
                      status,
                      exchange
                    }) => (
                      <StyledTableRow key={`${name}-${symbol}`}>
                        <StyledTableCell component="th" scope="row">
                          {name}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {symbol ? <Chip label={symbol} /> : null}
                        </StyledTableCell>
                        <StyledTableCell align="center">{formatPrice(price)}</StyledTableCell>
                        <StyledTableCell align="center">{formatDate(ipoDate)}</StyledTableCell>
                        <StyledTableCell align="center">
                          {numberOfShares ? numberOfShares.toLocaleString() : EMPTY_STRING}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {totalSharesValue
                            ? formatPrice(totalSharesValue.toLocaleString())
                            : EMPTY_STRING}
                        </StyledTableCell>
                        <StyledTableCell align="center">{status}</StyledTableCell>
                        <StyledTableCell align="center">{exchange}</StyledTableCell>
                      </StyledTableRow>
                    )
                  )}
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
      <Link
        href="https://finnhub.io/"
        target="_blank"
        rel="noopener noreferrer">
        IPO Data from Finnhub
      </Link>
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
  data: []
}
