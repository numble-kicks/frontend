import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

export const dateConverter = (date: Date) => {
  const recieved = dayjs(date).format('YYYY-MM-DD');
  const today = dayjs(new Date()).format('YYYY-MM-DD');

  return recieved === today
    ? dayjs(date).format('h:mm A')
    : dayjs(date).fromNow();
};
