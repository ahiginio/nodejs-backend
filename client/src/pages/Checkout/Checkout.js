import Header from '../../components/Header/Header'
import SideBarCheckout from '../../components/SideBarCheckout/SideBarCheckout'
import { AuthContext } from "../../context/AuthContext";
import { CartContext } from "../../context/CartContext";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
export default function Checkout () {
   const { authState } = useContext(AuthContext);
   const { cart } = useContext(CartContext);
   const [cartProducts, setCartProducts] = useState([]);
   const [address, setAddress] = useState('');
   const [orderCompleted, setOrderCompleted] = useState(false)
   const getCartProducts = () => {
     axios
       .get(`http://localhost:8080/api/cart/${cart}/productos`, {
         headers: {
           Authorization: `Bearer ${authState.token}`,
         },
       })
       .then((response) => {
         setCartProducts(response.data.products);
         console.log(response);
       })
       .catch((err) => {
         console.error(err);
       });
   };
   console.log(cartProducts);
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
     getCartProducts();
   }, []);
   
  const productsEnviar = cartProducts.map((product) => {
    return {
      title: product.product.title,
      price: product.product.price,
      qty: product.qty,
      description: product.product.description
    }
  });
  console.log(productsEnviar);
  const handleAddOrder = () => {
    axios
      .post(
        `http://localhost:8080/api/order`,
        {
          items: productsEnviar,
          status: "generated",
          email: authState.user.email,
          address: address,
        },
        {
          headers: {
            Authorization: `Bearer ${authState.token}`,
          },
        }
      )
      .then((res) => {
        setOrderCompleted(true)
        axios
          .delete(`http://localhost:8080/api/cart/${cart}/clear`, {
            headers: {
              Authorization: `Bearer ${authState.token}`,
            },
          })
          .then((response) => {
            console.log(res);
          })
          .catch((err) => {
            console.error(err);
          });
      })
      .catch((err) => {
        console.error(err);
      });
  }
  return (
    <>
      <Header />
      <div className="container">
        <div className="checkout">
          {!orderCompleted ? (
             <>
            <h1>Finalizar Compra</h1>
          <SideBarCheckout cartProducts={cartProducts} />
          <form>
            <label for="direccion">Direccion de entrega</label>
            <input
              type="text"
              name="direccion"
              placeholder="Direccion de entrega"
              onChange={(e) => setAddress(e.target.value)}
            ></input>
            {address === "" ? (
              <p>Completa la direccion para poder comprar</p>
            ) : (
              <div className="btn" onClick={() => handleAddOrder()}>
                Comprar
              </div>
            )}
          </form>  
          </>
          ) : (
           <h1>Orden completada con exito</h1>
          )}
          
        </div>
      </div>
    </>
  );
}