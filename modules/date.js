/* eslint-disable*/
import { DateTime } from './luxon1.js';

const dateTime = () => {
  const time = DateTime.now();
  const date = document.querySelector('.date');
  date.innerHTML = `${time.day}-${time.month}-${time.year}, ${time.hour}:${time.minute}:${time.second}`;
};

export default dateTime;