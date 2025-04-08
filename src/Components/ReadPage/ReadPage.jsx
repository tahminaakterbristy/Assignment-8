// import React from 'react';
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

import { useEffect, useState } from "react";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  { name: 'The Great Gatsby', pages: 180 },
  { name: '1984', pages: 328 },
  { name: 'The Hobbit', pages: 310 },
];
// const [books, setBooks] = useState([]);
// useEffect(() => {
//   fetch('./books.json')
//   .then(res => res.json())
//   .then(data => setBooks(data));
 
// }, []);

  


const CustomBarShape = (books) => {
  const { x, y, width, height } = books;

  return (
    <g>
      <rect x={x} y={y} width={width} height={height} rx={10} ry={10} fill="#8884d8" />
    </g>
  );
};

const ReadPage = () => (
  <ResponsiveContainer width="100%" height={300}>
    <BarChart data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="pages" shape={<CustomBarShape />} />
    </BarChart>
  </ResponsiveContainer>
);

export default ReadPage;
