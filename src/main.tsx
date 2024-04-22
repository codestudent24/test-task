import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import { AuthForm } from './modules/Auth/AuthForm.tsx';
import { Results } from './modules/Results/index.tsx';
import { TestList } from './modules/SelectTest/index.tsx';
import { TaskUnit } from './modules/TaskUnit/index.tsx';
import { TestEdit } from './modules/TestEdit/index.tsx';
import { store } from './store/store.ts';

import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "auth",
        element: <AuthForm />,
      },
      {
        path: "select-test",
        element: <TestList />,
      },
      {
        path: "edit-test",
        element: <TestEdit />,
      },
      {
        path: "test",
        element: <TaskUnit />,
      },
      {
        path: "results",
        element: <Results />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
