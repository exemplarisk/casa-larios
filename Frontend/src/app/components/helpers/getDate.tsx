export const getDate = () => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const localDate = new Date()
  let currentMonth = months[localDate.getMonth()]
  return currentMonth
}
