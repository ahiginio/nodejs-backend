import Header from "../../components/Header/Header";
import ProductCard from "../../components/ProductCard/ProductCard";
import Sidebar from "../../components/Sidebar/Sidebar";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import { CartContext } from "../../context/CartContext";
import { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
export default function Products() {
  const {productId} = useParams()
  const { authState } = useContext(AuthContext) 
  const { cart } = useContext(CartContext) 
  const [product, setProduct] = useState([])
  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/product/${productId}`,{
        headers: {
          "Authorization": `Bearer ${authState.token}`
        }
      })
      .then((response) => {
        setProduct(response.data);
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
    
  }, []);
 const addToCart = (product) => {
   axios
     .put(
       `http://localhost:8080/api/cart/${cart}/productos`,
       {
         product_id: product._id,
         qty: 1,
       },
       {
         headers: {
           Authorization: `Bearer ${authState.token}`,
         },
       }
     )
     .then((response) => {
       console.log(response);
     })
     .catch((err) => {
       console.error(err);
     });
 };
  return (
    <>
      <Header />
      <div className="container">
        <div className="single-product" style={{ width: "100%" }}>
          <div className="product-photo" style={{ width: "100%" }}>
            <img
              src={product.photo}
              alt={product.title}
              style={{ margin: "0 auto", display: "flex"}}
            />
          </div>
          <div className="product-info" style={{marginTop: 20}}>
            <h1>{product.title}</h1>
            <p style={{textAlign: "center"}}>{product.description}</p>
            <div className="col-50">
              <span className="product-price">{product.price}</span>
            </div>
            <div className="btn" onClick={() => addToCart(product)}>Agregar al carrito</div>
          </div>
        </div>
      </div>
    </>
  );
}