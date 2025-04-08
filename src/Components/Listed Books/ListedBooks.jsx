import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredSavedBooks } from "../../utility/localStorage";

const ListedBooks = () => {
  const books = useLoaderData();
  const [listedBook, setListesBook] = useState([]);
  const [displayBooks, setDisplay] = useState([]);

  

  useEffect(() => {
    const storedBooksIds = getStoredSavedBooks();
    console.log(storedBooksIds);
    if (books && books.length > 0) {
      const bookListed = [];
      for (const id of storedBooksIds) {
        const book = books.find((book) => book.id === id);
        if (book) {
          bookListed.push(book);
        }
      }
      setListesBook(bookListed);
      setDisplay(bookListed);
    }
  }, [books]);
  return (
    <div>
      <details className="dropdown">
        <summary className="btn m-1">open or close</summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
          <li>
            <a>Rating</a>
          </li>
          <li>
            <a>Number of pages</a>
          </li>
          <li>
            <a>Publish Year</a>
          </li>
        </ul>
      </details>
      <ul>
        {listedBook.map((book) => (
          <li key={book.id}>
            <div className="">
              <div className="card card-side bg-base-100 shadow-xl mt-5 ml-5 border-black">
                <figure>
                  <img src={book.image} />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{book.bookName}</h2>
                  <p className="font-bold">{book.authorName}.</p>
                  <p className="">Pages: {book.pages}.</p>
                  <div className="card-actions">
                    <button className="btn btn-glass bg-blue-300 text-blue-800">
                      {book.category}
                    </button>
                    <button className="btn btn-glass text-orange-600 bg-orange-200 w-20">
                      {book.rating.stars}
                    </button>
                    <button className="btn btn-glass bg-green-500 text-white">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListedBooks;
