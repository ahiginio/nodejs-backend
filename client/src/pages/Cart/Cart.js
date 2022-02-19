import {useContext, useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import axios from 'axios'
import Header from '../../components/Header/Header'
import { CartContext } from '../../context/CartContext'
import CartItem from '../../components/CartItem/CartItem'
export default function Cart () {
  const { cart } = useContext(CartContext)
  const { authState } = useContext(AuthContext) 
  console.log(cart)
  const [cartProducts, setCartProducts] = useState([])
  const getCartProducts = () => {
    axios
      .get(`http://localhost:8080/api/cart/${cart}/productos`, {
        headers: {
          Authorization: `Bearer ${authState.token}`,
        },
      })
      .then((response) => {
        setCartProducts(response.data.products);
        console.log(response)
      })
      .catch((err) => {
        console.error(err);
      });
  }
   const deleteFromCart = (item) => {
     axios
       .delete(`http://localhost:8080/api/cart/${cart}/productos/${item._id}`, {
         headers: {
           Authorization: `Bearer ${authState.token}`,
         },
       })
       .then((response) => {
          getCartProducts();
       })
       .catch((err) => {
         console.error(err);
       });
   };
  useEffect(() => {
    getCartProducts()
  },[])
  console.log(cartProducts)
  return (
    <>
      <Header />
      <div className="container">
        <h1>Cart</h1>
        <div className="cart">
          <div className="products-container">
            {cart
              ? cartProducts.map((item) => (
                  <CartItem item={item} deleteFromCart={deleteFromCart} />
                ))
              : null}
          <div className="btn" style={{width: '100%', textAlign: 'center', color: 'white'}}>
            <Link to="/checkout" style={{color: 'white'}}>Finalizar compra</Link>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}