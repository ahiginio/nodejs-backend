import axios from 'axios'
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { CartContext } from "../../context/CartContext";
export default function CartItem ({item, deleteFromCart}) {
  const { cart } = useContext(CartContext);
  const { authState } = useContext(AuthContext); 
  return (
    <div className="product-card">
      {item.product.photo ? (
        <div className="product-photo">
          <img src={item.product.photo} alt={item.product.title} />
        </div>
      ) : null}
      <div className="product-info">
        <h1 className="product-title">{item.product.title}</h1>
        {/* <p className="product-description">
          {product.description ? product.description : null}
        </p> */}
        <span className="product-price">$ {item.product.price}</span>
        <span className="product-stock">Cantidad: {item.qty}</span>
        <div className="btn" onClick={() => deleteFromCart(item)}>
          {" "}
          Eliminar{" "}
        </div>
      </div>
    </div>
  );
}