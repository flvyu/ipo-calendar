import moment from 'moment'

export function formatPrice(price) {
  const prices = price.split('-')
  if (prices.length > 1) {
    return `$${prices[0]} - $${prices[1]}`
  }
  if (prices.length > 0) {
    return `$${prices[0]}`
  }
  return ''
}

export function formatDate(dateString) {
  const dateObj = moment(new Date(`${dateString} 00:00`));
  return dateObj.format('LL')
}