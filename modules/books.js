const btnAdd = document.querySelector('.submit');
const title = document.querySelector('.title');
const author = document.querySelector('.author');
const bookStore = document.querySelector('.books-collection');

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.id = Date.now();
  }

  collection = JSON.parse(localStorage.getItem('form')) || [];

  renderBooks() {
    this.collection = JSON.parse(localStorage.getItem('form')) || [];
    bookStore.innerHTML = '';
    if (!this.collection) return;
    this.collection.forEach((item) => {
      const singleBook = document.createElement('div');
      singleBook.classList.add('class-book');
      const p = document.createElement('p');
      p.textContent = `"${item.title}" by ${item.author}`;
      const bton = document.createElement('button');
      bton.textContent = 'Remove';
      bton.classList.add('remove');
      bton.setAttribute('id', item.id);
      singleBook.appendChild(p);
      singleBook.appendChild(bton);
      bookStore.appendChild(singleBook);
    });
  }

  adddBook() {
    this.collection = JSON.parse(localStorage.getItem('form')) || [];
    const book = {
      title: this.title,
      author: this.author,
      id: this.id,
    };
    this.collection.push(book);
    localStorage.setItem('form', JSON.stringify(this.collection));
  }

  removeBook(targetId) {
    this.collection = JSON.parse(localStorage.getItem('form')) || [];
    const newArr = this.collection.filter((item) => item.id !== targetId);
    this.collection.length = 0;
    this.collection.push(...newArr);
    localStorage.setItem('form', JSON.stringify(this.collection));
    this.renderBooks();
  }
}

const miscBook = new Book();

miscBook.renderBooks();
bookStore.addEventListener('click', (e) => {
  if (e.target.classList.contains('remove')) {
    const targetid = parseInt(e.target.getAttribute('id'), 10);
    miscBook.removeBook(targetid);
  }
});

btnAdd.addEventListener('click', (e) => {
  e.preventDefault();
  if (!title.value || !author.value) return;

  const newBook = new Book(title.value, author.value, Date.now());
  newBook.adddBook();
  newBook.renderBooks();
  title.value = '';
  author.value = '';
});

export { Book, btnAdd, miscBook };
