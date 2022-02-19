import axios from 'axios';
import {useContext, useState} from 'react'
import { CartContext } from "../../context/CartContext";
import {AuthContext} from "../../context/AuthContext";
import {Link} from 'react-router-dom'
export default function ProductCard({product}) {
  const { cart } = useContext(CartContext)
  console.log(cart)
  const { authState } = useContext(AuthContext); 
  console.log(authState)
  const addToCart = (product) => {
    axios
      .put(`http://localhost:8080/api/cart/${cart}/productos`, {
        product_id: product._id,
        qty: 1,
      }, {
        headers: {
          Authorization: `Bearer ${authState.token}`,
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.error(err);
      });
  }
  
  return (
    <div className="product-card">
      <Link to={`/product/${product._id}`}>
        {product.photo ? (
          <div className="product-photo">
            <img src={product.photo} alt={product.title} />
          </div>
        ) : null}
      </Link>
        <div className="product-info">
          <h1 className="product-title">{product.title}</h1>
          {/* <p className="product-description">
          {product.description ? product.description : null}
        </p> */}
          <span className="product-price">$ {product.price}</span>
          {/* <span className="product-stock">{product.stock}</span> */}
          <div className="btn" onClick={() => addToCart(product)}>
            Comprar
          </div>
        </div>
    </div>
  );
}