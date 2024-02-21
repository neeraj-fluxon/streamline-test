
import React from "react";
import { useCart } from "./CartProvider";
function Cart() {
    const cart = useCart();
  return (
    <div>
     Cart
     <ul>
        {
              cart.map((item) => {
                    return (
                        <li>
                            <div>Product [{item.id}] : Quantity[{item.quantity}]</div>
                        </li>
                    );
                })            
        }
     </ul>
    </div>
  );
}

export default Cart;