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
import { AuthProvider } from './components/context/Contexts';
import Profile from './components/Termekek/Profile';
import Cart from './components/Termekek/Cart';
import { CartProvider } from './components/context/CartContext';

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
  },
  {path: "/profile",
    element: <Profile/>
  },
  {path:"/cart",
    element: <Cart/>
  }
  
]);


createRoot(document.getElementById('root')!).render(
  <AuthProvider>
  <StrictMode>
    
      <CartProvider>
    <RouterProvider router={router}></RouterProvider>
    </CartProvider>
    
  </StrictMode>
  </AuthProvider>,
)
