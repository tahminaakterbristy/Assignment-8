
import { useEffect,useState } from "react";
// import Books from "../Books/Books";
const BookCard = () => {
    const [books,setBooks] = useState([]);
    useEffect( () =>{
        fetch('books.json')
        .then(res =>res.json())
        .then(data => setBooks(data));
    },[])
    return (
        
         <div>
          <div className="text-centr">
            <h2>Featured books:{books.length}</h2>

          </div>
          <div className="grid-cols-3 gap-12">
            {
             books.map(book =><BookCard key={book.bookId} book={book}></BookCard>)
            }
          </div>
         </div>
    );
};

export default BookCard;
// import React from 'react';
