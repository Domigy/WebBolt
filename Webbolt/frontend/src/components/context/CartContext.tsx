import React, { createContext, useContext, useState } from "react";

export interface Termek {
    id: number;
    name: string;
    imgUrl: string;
    model: string;
    type: string; 	
    vrmp: string;
    price: number; 	
}


interface CartContextType {
  termekItmes: Termek[];
  addToCart: (item: Termek) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [termekItmes, setCartItems] = useState<Termek[]>([]);

  const addToCart = (item: Termek) => {
    termekItmes.push(item);
  };

  const removeFromCart = (id: number) => {
    setCartItems((prev) => {
      const index = prev.findIndex((item) => item.id === id);
      if (index !== -1) {
        const updatedCart = [...prev];
        updatedCart.splice(index, 1); 
        return updatedCart;
      }
      return prev;})
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ termekItmes, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
