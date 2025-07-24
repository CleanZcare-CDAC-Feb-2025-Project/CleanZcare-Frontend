import dayjs from 'dayjs';

export function formatDate(
  date,
  format = 'DD MMM, YYYY'
) {
  if (!date) return '';
  return dayjs(date).format(format);
}
