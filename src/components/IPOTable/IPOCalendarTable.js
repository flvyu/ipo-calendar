import React from 'react'
import PropTypes from 'prop-types'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import {
  Paper,
  TableRow,
  TableHead,
  TableContainer,
  TableCell,
  TableBody,
  Table
} from '@material-ui/core'
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
    // minWidth: 700,
    width: 1280,
    overflowX: 'scroll'
  }
})

export default function IPOCalendarTable({ data }) {
  const classes = useStyles()

  return (
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
          {data.length === 0 ? (
            <DataNotAvailable />
          ) : (
            data.map(row => (
              <StyledTableRow key={`${row.name}-${row.symbol}`}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="center">{row.symbol}</StyledTableCell>
                <StyledTableCell align="center">{row.price}</StyledTableCell>
                <StyledTableCell align="center">{row.date}</StyledTableCell>
                <StyledTableCell align="center">{row.numberOfShares}</StyledTableCell>
                <StyledTableCell align="center">{row.totalSharesValue}</StyledTableCell>
                <StyledTableCell align="center">{row.status}</StyledTableCell>
                <StyledTableCell align="center">{row.exchange}</StyledTableCell>
              </StyledTableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
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

IPOCalendarTable.propTypes = {
  data: []
}
