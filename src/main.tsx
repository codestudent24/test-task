import React from 'react';
import ReactDOM from 'react-dom/client';
import { NavLink, RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import Cart from './pages/Cart/index.tsx';
import Delivery from './pages/Delivery/index.tsx';
import Products from './pages/Products/index.tsx';

import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <>
      <h1>Такой страницы не существует!</h1>
      <NavLink to={'/'}>На главную</NavLink>
    </>,
    children: [
      {
        path: "/",
        element: <Products />,
      },
      {
        path: "orders",
        element: <Cart />,
      },
      {
        path: "delivery",
        element: <Delivery />,
      },
      {
        path: "cart",
        element: <Cart />,
      }
    ],
  },
], {
  basename: '/test-task'
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
