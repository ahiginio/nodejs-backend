import { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { AuthContext } from "../../context/AuthContext";
export default function Register() {
  let navigate = useNavigate();
  const { setCart } = useContext(CartContext);
  const { setAuthState } = useContext(AuthContext);
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const data = {
    email: email,
    username: userName,
    password: password,
    passwordCheck: passwordConfirm,
    firstName: name,
    lastName: lastname,
    age: age,
    phone: phone,
    role: "admin",
  };
  const handleRegister = () => {
    axios
      .post(`http://localhost:8080/api/user/register`, data)
      .then((res) => {
        if (res.status === 200) {
          axios
            .post(`http://localhost:8080/api/user/login`, {
              email: email,
              password: password,
            })
            .then((res) => {
              if (res.status === 200) {
                const token = res.data.token;
                const user = res.data.user;
                localStorage.setItem("token", token);
                localStorage.setItem("user", JSON.stringify(user));
                setAuthState(res.data);
                alert("USUARIO LOGEADO, TOKEN GUARDADO");
                axios
                  .post(
                    `http://localhost:8080/api/cart/${res.data.user.id}`,
                    {},
                    {
                      headers: {
                        Authorization: `Bearer ${res.data.token}`,
                      },
                    }
                  )
                  .then((response) => {
                    setCart(response.data.id);
                    localStorage.setItem("cartId", response.data.id);
                    navigate("/products");
                  })
                  .catch((err) => {
                    console.error(err);
                  });
              }
            })
            .catch((error) => {
              console.error(error);
            });
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div className="form-container">
      <h1>Registrarse</h1>
      <form>
        <input
          type="text"
          placeholder="Usuario"
          name="username"
          onChange={(e) => setUsername(e.target.value)}
        />
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

        <input
          type="password"
          placeholder="Contraseña"
          name="passwordConfirm"
          minLength="8"
          onChange={(e) => setPasswordConfirm(e.target.value)}
        />

        <input
          type="text"
          placeholder="Nombre"
          name="firstName"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Apellido"
          name="lastName"
          onChange={(e) => setLastname(e.target.value)}
        />
        <input
          type="text"
          placeholder="Edad"
          name="age"
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          type="phone"
          placeholder="Telefono"
          name="phone"
          onChange={(e) => setPhone(e.target.value)}
        />
        <div className="btn" onClick={() => handleRegister()}>
          Registrarse
        </div>
      </form>
    </div>
  );
}
