/* eslint-disable*/
import * as books from './modules/books.js';
import * as navigation from './modules/navigation.js';
import dateTime from './modules/date.js';

dateTime();

navigation.allLinks.addEventListener('click', (e) => {
  const clicked = e.target;
  if (!clicked.classList.contains('link')) return;
  navigation.allSection.forEach((section) => {
    section.classList.remove('active');
  });
  document
    .querySelector(`.section-${clicked.dataset.link}`)
    .classList.add('active');
});

