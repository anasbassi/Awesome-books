const allSection = document.querySelectorAll('.section');
const allLinks = document.querySelector('.nav-links');

allLinks.addEventListener('click', (e) => {
  const clicked = e.target;
  if (!clicked.classList.contains('link')) return;
  allSection.forEach((section) => {
    section.classList.remove('active');
  });
  document
    .querySelector(`.section-${clicked.dataset.link}`)
    .classList.add('active');
});

export {allSection, allLinks}
