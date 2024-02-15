import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import ErrorPage from './pages/ErrorPage'
import MainPage from './pages/Main'
import PostPage from './pages/Post'

const router = createBrowserRouter([
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

export default function App() {
  return <RouterProvider router={router} />
}
