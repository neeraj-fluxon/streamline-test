import { Routes, Route, Link } from 'react-router-dom';
import ProductList from './ProductList';
import Cart from './Cart';
import { CartProvider } from './CartProvider';
function App() {
  return (
    <div>
       <ul>
        <li><Link to={"/cart"}>Cart</Link></li>
       </ul>
       <CartProvider>
       <Routes>
        <Route path="/cart" element={<Cart/>} />
        <Route path="/products" element ={<ProductList/>}/>
        <Route path="/*" element ={<ProductList/>}/>
       </Routes>
       </CartProvider>
    </div>
  );
}

export default App;
