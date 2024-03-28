import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.jsx';
import MainLayout from './Layout/MainLayout.jsx';
import ListBook from './pages/ListBook.jsx';
import PageRead from './pages/PageRead.jsx';
import Book from './components/Book.jsx';
import ReadBook from './pages/ReadBook.jsx';
import WishList from './pages/WishList.jsx';
import { Toaster } from 'react-hot-toast';
import ErrorPage from './components/ErrorPage.jsx';
import Writer from './pages/Writer.jsx';
import Contact from './pages/Contact.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage />,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:()=> fetch('/booklist.json'),
              
      },
      {
        path: '/book/:id',
        element: <Book></Book>,
        loader:()=> fetch('../booklist.json'),
      },
      {
        path:'/listbook',
        element: <ListBook></ListBook>,
        children:[
          {
            index:true,
            element: <ReadBook></ReadBook>
          },
          {
            path:'wishlist',
            element: <WishList></WishList>
          },
        ]
      },
      {
        path:'pageread',
        element:<PageRead></PageRead>
      },
      {
        path:'writer',
        element:<Writer></Writer>,
        loader:()=> fetch('/writerlist.json'),
      },
      {
        path:'contact',
        element:<Contact></Contact>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
     <RouterProvider router={router} />
     <Toaster
  position="top-right"
  reverseOrder={false}
/>
  </>,
)
