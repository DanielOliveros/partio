// function selectedDay(day, value) {
//   return value.isSame(day, 'day');
// }

function beforeToday(day) {
  return day.isBefore(new Date(), 'day');
}

function isToday(day) {
  return day.isSame(new Date(), 'day');
}

export default function dayStyles(day) {
  if (beforeToday(day)) return { backgroundColor: 'rgba(0, 221, 237, 0.18)' };
  // if (selectedDay(day, value)) return { backgroundColor: 'red', color: 'white' };
  if (isToday(day)) return { backgroundColor: '#000131', color: 'white' };
  return '';
}
