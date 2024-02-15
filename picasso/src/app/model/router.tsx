import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from '../../pages/ErrorPage'
import MainPage from '../../pages/Main'
import PostPage from '../../pages/Post'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/:id',
    element: <PostPage />,
  },
  {
    path: '*',
    element: <ErrorPage />,
  }
])
