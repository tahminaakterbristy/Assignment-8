import { useLoaderData, useParams } from "react-router-dom";
import { saveBook } from "../../utility/localStorage";


const BookDetails = () => {
    const books = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const book = books?.find(book => book.id === idInt);

    const handleAddBook = () =>{
      saveBook(idInt);
    }
    
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure>
    <img src= {book.image}/>
  </figure>
  <div className="card-body">
    <h2 className="card-title">{book.bookName}</h2>
    <p>Author: {book.authorName}</p>
    <p>Pages:{book.pages}</p>
    <p>Review:{book.description}</p>
    <p>Year of Publish:{book.yearOfPublish}</p>
    
    <div className="card-actions justify-end">
      <button onClick={handleAddBook} className="btn btn-primary">Listen</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default BookDetails;