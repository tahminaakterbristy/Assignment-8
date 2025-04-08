

import { useEffect, useState } from "react";
import Cards from "../Cards/Cards";


const Books = () => {
  const [books, setBooks] = useState([]);

  const [dataLength, setDataLength] = useState(6);

  useEffect(() => {
    fetch('./books.json')
    .then(res => res.json())
    .then(data => setBooks(data));
   
  }, []);
console.log(books);
  return (
    <div className="p-4">
      <h1>Books</h1>
      
        <div className="grid grid-cols-3 gap-6 bg-slate-800 px-5 pt-8">
          {
            books.slice(0, dataLength).map(book => <Cards key={book.id} book ={book}></Cards>)
          }

        </div>
        <div className="flex justify-center items-center">
          <button 
          onClick={() => setDataLength(books.length)}
          className="btn btn-primary mt-8"> See all Books</button>
        </div>
         
    
      
    </div>
  );
};

export default Books;
