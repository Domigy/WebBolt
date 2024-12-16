import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Kezdolap from './components/Termekek/Kezdolap';
import Login from './components/Termekek/Login'
import Regisztracio from './components/Termekek/Regisztracio';

const router = createBrowserRouter([
  {
    path: "/",
    element: < Kezdolap/>,
  },
  {
    path: "/kezdolap",
    element: < Kezdolap/>,
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/registation",
    element: <Regisztracio/>
  }
]);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
