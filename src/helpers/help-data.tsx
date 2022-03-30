export const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'Jun',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
export const weekDays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

export const today = new Date();

export const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);

export const dayThree = new Date(today);
dayThree.setDate(dayThree.getDate() + 2);

export const dayFour = new Date(today);
dayFour.setDate(dayFour.getDate() + 3);

export const dayFive = new Date(today);
dayFive.setDate(dayFive.getDate() + 4);
