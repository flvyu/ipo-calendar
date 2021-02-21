import React, { useEffect, useState } from 'react'

import Banner from '../components/Banner'
import { BoxedProgress } from '../components/CircularProgress'
import { DateRange as Calendar } from '@material-ui/icons'
import { DATE_SEPARATION } from '../constants/util_constants'
import DateRangePicker from '../components/DateRangePicker'
import { Helmet } from 'react-helmet'
import IPOCalendarTable from '../components/IPOTable/IPOCalendarTable'
import Layout from '../components/Layout'
import NotificationBar from '../components/NotificationBar'
import { Notifications } from '@material-ui/icons'
import ProductHuntBadge from '../components/ProductHuntBadge'
import { SITE_DESCRIPTION } from '../constants/content_constants'
import SocialMediaShare from '../components/SocialMediaShare'
import { Typography } from '@material-ui/core'
import { loadIpoCalendarInformation } from '../services'
import moment from 'moment'
import { useSelectDate } from '../hooks'

const currentDate = moment()
const futureDate = moment().add(DATE_SEPARATION.amount, DATE_SEPARATION.type)

export default function Home() {
  const startDate = useSelectDate(currentDate)
  const endDate = useSelectDate(futureDate)

  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [ipoCalendarInformation, setIpoCalendarInformation] = useState({
    ipoCalendar: [],
  })

  useEffect(() => {
    setLoading(true)
    loadIpoCalendarInformation({
      from: startDate.formattedDate,
      to: endDate.formattedDate,
    })
      .then((response) => {
        setIpoCalendarInformation(response)
        setLoading(false)
      })
      .catch((error) => {
        setError(error)
        setLoading(false)
      })
  }, [startDate.formattedDate, endDate.formattedDate])

  const year = new Date().getFullYear()

  return (
    <Layout
      sidebar={<SocialMediaShare />}
      notificationBar={
        <NotificationBar>
          <Notifications /> You can add this app to your home screen for quick
          access!
        </NotificationBar>
      }
    >
      <Helmet>
        <title>{`Quickly find Upcoming and Recent IPOs | ${year} IPO Calendar`}</title>
      </Helmet>
      <Banner
        title={
          <>
            IPO Calendar <Calendar />
          </>
        }
        description={SITE_DESCRIPTION}
      />
      <Typography variant="body2" align="center">
        Select the start and end date to filter the IPO data
      </Typography>
      <DateRangePicker
        startDate={startDate.date}
        endDate={endDate.date}
        handleStartDateChange={startDate.onDateChange}
        handleEndDateChange={endDate.onDateChange}
      />
      <div style={{ minHeight: 500 }}>
        {loading ? (
          <BoxedProgress boxProps={{ mt: 2 }} />
        ) : error ? (
          <p>Something went wrong</p>
        ) : (
          <IPOCalendarTable data={ipoCalendarInformation.ipoCalendar} />
        )}
        <ProductHuntBadge />
      </div>
    </Layout>
  )
}
