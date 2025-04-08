// src/App.js

import React from 'react';
import { Link } from 'react-router-dom';

const Cards = ({book}) => {
    const {id,bookName, image, authorName, category, count, stars} = book;
    return (
        <div className="card bg-base-100 shadow-xl">
        <figure>
          <img
            src= {image}
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{bookName}</h2>
          <p>{authorName}</p>
          <p>{category}</p>
          

          <div className="card-actions justify-end">
           <Link to={`/books/${id}`}>
           <button className="btn btn-primary">
           Read More</button>
           </Link>
          </div>
        </div>
      </div>
    );
};

export default Cards;
