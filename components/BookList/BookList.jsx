
import BookCard from './BookCard';

const books = [
  {
    image: 'https://via.placeholder.com/150',
    tags: ['New', 'Bestseller'],
    bookName: 'Book One',
    author: 'Author One',
    category: 'Fiction',
    rating: 4,
  },
  {
    image: 'https://via.placeholder.com/150',
    tags: ['Classic'],
    bookName: 'Book Two',
    author: 'Author Two',
    category: 'Non-fiction',
    rating: 5,
  },
  {
    image: 'https://via.placeholder.com/150',
    tags: ['New'],
    bookName: 'Book Three',
    author: 'Author Three',
    category: 'Science Fiction',
    rating: 3,
  },
  {
    image: 'https://via.placeholder.com/150',
    tags: ['Bestseller'],
    bookName: 'Book Four',
    author: 'Author Four',
    category: 'Fantasy',
    rating: 4,
  },
  {
    image: 'https://via.placeholder.com/150',
    tags: ['Classic'],
    bookName: 'Book Five',
    author: 'Author Five',
    category: 'Horror',
    rating: 2,
  },
  {
    image: 'https://via.placeholder.com/150',
    tags: ['New'],
    bookName: 'Book Six',
    author: 'Author Six',
    category: 'Romance',
    rating: 5,
  },
];

const BookList = () => {
  return (
    <div className="py-10 px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book, index) => (
          <BookCard key={index} {...book} />
        ))}
      </div>
    </div>
  );
};

export default BookList;
