const getStoredSavedBooks = () =>{
    const storedBooks = localStorage.getItem('book-details');
    if(storedBooks){
        return JSON.parse(storedBooks);
    }
    return [];
}

const saveBook = id =>{
    const storedbooks = getStoredSavedBooks();
    const exists = storedbooks.find(bookId => bookId === id);
    if(!exists){
        storedbooks.push(id);
        localStorage.setItem('book-details', JSON.stringify(storedbooks))
    }

}
export {getStoredSavedBooks, saveBook}