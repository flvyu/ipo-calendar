import moment from 'moment'
import { EMPTY_STRING } from './constants/util_constants'

export function formatPrice(price) {
  if (!price) {
    return EMPTY_STRING
  }
  const prices = price.split('-')
  if (prices.length > 1) {
    return `$${prices[0]} - $${prices[1]}`
  }
  if (prices.length > 0) {
    return `$${prices[0]}`
  }
  return EMPTY_STRING
}

export function formatDate(dateString) {
  if (!dateString) {
    return EMPTY_STRING
  }
  const dateObj = moment(`${dateString} 00:00`)
  return dateObj.format('LL')
}
