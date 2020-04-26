import { Typography } from '@material-ui/core'
import { DateRange as Calendar } from '@material-ui/icons'
import moment from 'moment'
import React, { useState, useEffect } from 'react'
import Banner from './components/Banner'
import DateRangePicker from './components/DateRangePicker'
import Layout from './components/Layout'
import IPOTable from './components/IPOTable'
import { BoxedProgress } from './components/CircularProgress'
import { SITE_DESCRIPTION } from './constants/content_constants'
import { DATE_SEPARATION } from './constants/util_constants'
import { useSelectDate } from './hooks'
import { loadIpoCalendarInformation } from './services'

const currentDate = moment(new Date('2020-01-01 00:00'))
const futureDate = moment(currentDate).add(DATE_SEPARATION.amount, DATE_SEPARATION.type)

function App() {
  const startDate = useSelectDate(currentDate)
  const endDate = useSelectDate(futureDate)

  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [ipoCalendarInformation, setIpoCalendarInformation] = useState({
    ipoCalendar: []
  })

  // useEffect(() => {
  //   setLoading(true)
  //   loadIpoCalendarInformation({ from: startDate.formattedDate, to: endDate.formattedDate })
  //     .then(response => {
  //       setIpoCalendarInformation(response)
  //       setLoading(false)
  //     })
  //     .catch(error => {
  //       setError(error)
  //       setLoading(false)
  //     })
  // }, [startDate.formattedDate, endDate.formattedDate])

  return (
    <Layout>
      <Banner
        title={
          <>
            IPO Calendar <Calendar />
          </>
        }
        description={SITE_DESCRIPTION}
      />
      <Typography align="center">Select the start and end date to filter the IPO data</Typography>
      <DateRangePicker
        startDate={startDate.date}
        endDate={endDate.date}
        handleStartDateChange={startDate.onDateChange}
        handleEndDateChange={endDate.onDateChange}
      />
      {loading ? (
        <BoxedProgress boxProps={{ mt: 2 }} />
      ) : error ? (
        <p>Something went wrong</p>
      ) : (
        <IPOTable data={ipoCalendarInformation.ipoCalendar} />
      )}
    </Layout>
  )
}

export default App
