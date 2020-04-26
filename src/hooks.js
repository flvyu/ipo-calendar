import { useState } from 'react'
import { DEFAULT_DATE_FORMAT } from './constants/util_constants'

export function useSelectDate(defaultDate = new Date(), format = DEFAULT_DATE_FORMAT) {
  const [selectedDate, setSelectedDate] = useState(defaultDate)

  const handleDateChange = date => {
    setSelectedDate(date)
  }

  return {
    date: selectedDate,
    onDateChange: handleDateChange,
    formattedDate: selectedDate ? selectedDate.format(format) : ''
  }
}
