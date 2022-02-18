import {useState, useEffect, useContext} from 'react';
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../context/AuthContext";
import axios from 'axios'
import { CartContext } from '../../context/CartContext';
export default function Login () {
  let navigate = useNavigate();
  const authContext = useContext(AuthContext);
  const { setAuthState, isAuthenticated, authState } = authContext;
  const {setCart } = useContext(CartContext)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const handleLogin = (e) => {
    e.preventDefault();
    const usuario = {
      email: email,
      password: password,
    };
     axios
       .post(`http://localhost:8080/api/user/login`, usuario)
       .then((res) => {
         if (res.status === 200) {
          const token = res.data.token;
          const user = res.data.user;
          localStorage.setItem("token", token);
          localStorage.setItem("user", JSON.stringify(user));
          setAuthState(res.data);
          console.log(token)
          axios.post(`http://localhost:8080/api/cart/${res.data.user.id}`,{}, {
            headers: {
              "Authorization": `Bearer ${res.data.token}`
            }
          }).then((response) => {
            setCart(response.data.id)
            localStorage.setItem('cartId', response.data.id)
            navigate('/products')
          }).catch((err) => {console.error(err)})
        }
      })
       .catch((error) => {
         console.error(error)
       });
  }
  return (
    <div className="form-container">
      <h1>Iniciar Sesion</h1>
      <form>
        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          name="password"
          minLength="8"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="btn" onClick={(e) => handleLogin(e)}>
          Iniciar Sesion
        </div>
      </form>
    </div>
  );
}