import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './Components/Home/Home.jsx';
import ListedBooks from './Components/Listed Books/ListedBooks.jsx';

import Root from './Components/Root/Root.jsx';
import BookDetails from './Components/BookDetails/BookDetails.jsx';
import ReadPage from './Components/ReadPage/ReadPage.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element:<Home></Home>, 
        // loader: () => fetch('/realestate.json')
      },
  {
    path: "ListedBooks",
    element: <ListedBooks></ListedBooks>,
    loader: () => fetch('books.json')
  },
  {
    path: "ReadPage",
    element: <ReadPage></ReadPage>,
  },
  {
    path: '/books/:id',
    element: <BookDetails></BookDetails>,
    loader: () => fetch('books.json')
  },
 
]
},
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
