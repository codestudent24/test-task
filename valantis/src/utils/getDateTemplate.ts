export function getDateTemplate(): string {
  const date = new Date()
  const year = date.getFullYear();
  const month = `${(date.getMonth() + 1)}`.padStart(2, '0')
  const day = date.getDate()

  return `${year}${month}${day}`
}