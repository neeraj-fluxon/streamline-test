import React,{useContext, useState} from "react";
const CartContext = React.createContext();
const CartUpdateContext = React.createContext();

export function useCart() {
    return useContext(CartContext);
}

export function useUpdateCart() {
    return useContext(CartUpdateContext);
}

export function CartProvider({children})  {
 const [cart, setCartItem] = useState([]);

 function addToCart(item) {
    console.log("adding product:",item);
    console.log("cartItems:", cart);
     // declare the quantity property if it doesn't exist
     item.quantity = item.quantity || 1;
     // get the index from the cart
     const i = cart.findIndex(obj => obj.id === item.id);
     // if the item exists increment the quantity
     if(i > -1) {
       const newCart = [...cart];
       newCart[i].quantity = item.quantity + 1; 
       setCartItem(newCart)
     } else {
       // the item doesn't exist so add it to the cart
       setCartItem([...cart, item]);
     }
 }
 return (

    <CartContext.Provider value = {cart}>
        <CartUpdateContext.Provider value = {addToCart}>
            {children}
        </CartUpdateContext.Provider>
    </CartContext.Provider>
);
}
