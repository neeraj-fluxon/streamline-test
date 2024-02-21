import React from 'react';
import products from './products.json'
import { useUpdateCart } from './CartProvider';
function ProductList() {   
    const updateCart = useUpdateCart(); 
    console.log(products.product);
    const addToCart = (id) => {
        updateCart({
            id: id,
            quantity: 1,
        })
    }
    return (
      <div>
        Product List
        <ul>
            {
               products.product.map(product => {
                return (<li key={product.id}>
                    <div> Id : {product.id}</div>
                    <div>Caption :{product.caption}</div>
                    <div>Price: {product.price}</div>
                    <button onClick={() => addToCart(product.id)}>Add to cart</button>
                </li>);
               }) 
            }
        </ul>
      </div>
    );
  }
  
  export default ProductList;