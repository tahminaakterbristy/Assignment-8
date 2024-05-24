// import React from 'react';

const Books = ({book}) => {
  const {image, bookName, author, category} = book;
  return (
    
         <div className="card w-96 bg-base-100 shadow-xl">
<figure><img src={image} alt="Shoes" /></figure>
<div className="card-body">
  <h2 className="card-title">{bookName}</h2>
  <p>{author}</p>
  <h2>{category} </h2>
  <div className="card-actions justify-end">
    <button className="btn btn-primary">Buy Now</button>
  </div>
</div>
</div>
          
     
  );
}

export default Books;


