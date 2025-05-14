let currentIndex = 0;
const books = document.querySelectorAll('.book');
const carousel = document.querySelector('.carousel');
const totalBooks = books.length;

const showBook = (index) => {
  carousel.style.transform = `translateX(-${index * (books[0].offsetWidth + 20)}px)`;
};

document.getElementById('next').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % totalBooks;  // Loop back to the first book
  showBook(currentIndex);
});

document.getElementById('prev').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + totalBooks) % totalBooks;  // Loop back to the last book
  showBook(currentIndex);
});

