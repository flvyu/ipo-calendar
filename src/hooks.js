import { useState } from 'react'

export function useSelectDate(defaultDate = new Date()) {
  const [selectedDate, setSelectedDate] = useState(defaultDate)

  const handleDateChange = date => {
    setSelectedDate(date)
  }

  return {
    date: selectedDate,
    onDateChange: handleDateChange
  }
}
