import dayjs from 'dayjs';
import 'dayjs/locale/fr';
import Strings from 'res/strings.js';

export const hoursDiff = (date) => {
  return Math.round(dayjs(date).diff(dayjs(), 'hour', true));
};

export const timeRemaining = (date) => {
  let remaining = '',
    diff = hoursDiff(date);
  if (diff < 48 && diff > 0) {
    remaining = diff + ' ' + Strings.hoursLeft;
  } else if (diff < 2160 && diff > 0) {
    remaining = Math.round(diff / 24) + ' ' + Strings.daysLeft;
  } else if (diff > 2160) {
    remaining = Math.round(diff / 720) + ' ' + Strings.monthLeft;
  } else {
    remaining = 'Step ended';
  }
  console.log(remaining);
  return remaining;
};
