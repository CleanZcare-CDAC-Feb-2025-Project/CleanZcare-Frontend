import dayjs from 'dayjs';

export function getFormattedDateString(date) {
  if (!date) return date ;
  return dayjs(date).format('DD-MMM-YYYY');
}

export function getDateRangeStateValues(state) {
  if (!state) {
    return null;
  }
  return new Date(state);
}

export default function getFormattedDateRangeString(dates) {
  const [start, end] = Array.isArray(dates) ? dates : [];
  if (start && end) {
    return `${getFormattedDateString(start)};${getFormattedDateString(end)}`;
  }
  return getFormattedDateString(start);
}
