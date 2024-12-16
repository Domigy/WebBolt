import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Kezdolap from './components/Termekek/Kezdolap';

const router = createBrowserRouter([
  {
    path: "/",
    element: < Kezdolap/>,
  },
  {
    path: "/kezdolap",
    element: < Kezdolap/>,
  },
]);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
