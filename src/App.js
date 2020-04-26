import React, { useState, useEffect } from 'react'
import Layout from './components/Layout'
import Banner from './components/Banner'
import DateRangePicker from './components/DateRangePicker'
import { Typography } from '@material-ui/core'
import { DateRange as Calendar } from '@material-ui/icons'
import { SITE_DESCRIPTION } from './constants/content_constants'
import { DATE_SEPARATION } from './constants/util_constants'
import { useSelectDate } from './hooks'
import moment from 'moment'
import { loadIpoCalendarInformation } from './services'

const currentDate = new Date()
const futureDate = moment().add(DATE_SEPARATION.amount, DATE_SEPARATION.type)

function App() {
  const startDate = useSelectDate(currentDate)
  const endDate = useSelectDate(futureDate)

  const [ipoCalendarInformation, setIpoCalendarInformation] = useState({
    ipoCalendar: []
  })

  // useEffect(() => {
  //   loadIpoCalendarInformation({ from: '2020-01-01', to: '2021-01-01' })
  //     .then(response => {
  //       setIpoCalendarInformation(response)
  //     })
  //     .catch(error => {
  //       console.log(error)
  //     })
  // }, [])

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
      <Typography>{`Showing expected IPO for the next ${DATE_SEPARATION.amount} ${DATE_SEPARATION.type}`}</Typography>
      <DateRangePicker
        startDate={startDate.date}
        endDate={endDate.date}
        handleStartDateChange={startDate.onDateChange}
        handleEndDateChange={endDate.onDateChange}
      />
      {ipoCalendarInformation.ipoCalendar.map(ipo => (
        <p key={ipo.name}>{ipo.name}</p>
      ))}
    </Layout>
  )
}

export default App
