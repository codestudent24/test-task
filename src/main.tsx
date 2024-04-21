import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import { TestList } from './components/SelectTest/TestList.tsx';
import { AuthForm } from './modules/AuthForm.tsx';

import { Provider } from 'react-redux';
import './index.css';
import { store } from './store/store.ts';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Provider store={store}>
      <App />
    </Provider>,
    children: [
      {
        path: "auth",
        element: <AuthForm />,
      },
      {
        path: "select-test",
        element: <TestList />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
