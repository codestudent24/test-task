export function getDateTemplate(): string {
  const date = new Date()
  date.setTime(date.getTime() - 3 * 60 * 60 * 1000)
  const year = date.getFullYear();
  const month = `${(date.getMonth() + 1)}`.padStart(2, '0')
  const day = `${date.getDate()}`.padStart(2, '0')

  return `${year}${month}${day}`
}