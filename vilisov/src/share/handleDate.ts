export function getDateFromString(input: string) {
  const date = input.match(/\d{4}-\d{2}-\d{2}/)
  if (date) return date[0];
  return '2024-01-01';
}

export function getHoursFromString(input: string) {
  const date = input.match(/T\d{2}:\d{2}:\d{2}/)
  if (date) return Number(date[0].slice(1).split(':')[0]);
  return 0;
}

export function getMinutesFromString(input: string) {
  const date = input.match(/T\d{2}:\d{2}:\d{2}/)
  if (date) return Number(date[0].split(':')[1]);
  return 0;
}

export function createDate(date: string, hours: number, minutes: number) {
  const dateArray = date.split('-').map((el) => Number(el));
  const fullDate = new Date(dateArray[0], dateArray[1]-1, dateArray[2], hours, minutes);
  return fullDate;
}

function isEnoughTime(date: Date) {
  const today = new Date();
  const diff = date.getTime() - today.getTime();
  const secondsPerHour = 3600;
  const hoursPerDay = 24;
  const millisecondsPerDay = secondsPerHour * hoursPerDay * 1000;
  if (diff < 0) {
    return 'red';
  } else if (diff > millisecondsPerDay) {
    return 'darkgreen';
  } else {
    return 'orange'
  }
}

export function selectColor(input: Date) {
  const date = input.toString();
  const d = getDateFromString(date);
  const h = getHoursFromString(date);
  const m = getMinutesFromString(date);
  const fullDate = createDate(d, h, m);
  return isEnoughTime(fullDate)
}