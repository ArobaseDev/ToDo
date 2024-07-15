import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home/Home.tsx'
import TodoList from './pages/TodoList.tsx'
import Register from './pages/Register.tsx'
import TodoSingle from './pages/TodoEdit.tsx'
//import App from './App.tsx'
//import './assets/css/index.css'

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/register', element: <Register /> },
  { path: '/todos', element: <TodoList /> },
  { path: '/todos/:id', element: <TodoSingle /> },

])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
