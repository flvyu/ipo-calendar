import React from 'react'
import Grid from '@material-ui/core/Grid'
import MomentUtils from '@date-io/moment'
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers'

export default function DateRangePicker({
  startDate,
  endDate,
  handleStartDateChange,
  handleEndDateChange
}) {
  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <Grid container justify="space-around">
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="yyyy/mm/dd"
          margin="normal"
          id="date-picker-inline-from"
          label="Start date"
          value={startDate}
          onChange={handleStartDateChange}
          KeyboardButtonProps={{
            'aria-label': 'Select the start date'
          }}
        />
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="yyyy/mm/dd"
          margin="normal"
          id="date-picker-inline-to"
          label="End date"
          value={endDate}
          onChange={handleEndDateChange}
          KeyboardButtonProps={{
            'aria-label': 'Select the end date'
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  )
}
