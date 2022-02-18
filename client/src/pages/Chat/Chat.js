import { useContext, useEffect, useState } from "react";
import {useParams} from 'react-router-dom'
import Header from "../../components/Header/Header";
import SidebarAccount from "../../components/SidebarAccount/SidebarAccount";
import moment from 'moment'
import axios from 'axios'
import { AuthContext } from "../../context/AuthContext";
import socketIOClient from "socket.io-client";

export default function Account (){
  
  const {authState} = useContext(AuthContext)
  const [email, setEmail] = useState("")
  const [mensaje, setMensaje] = useState("")
  const [mensajesSocket, setMensajesSocket] = useState([])
  const [response, setResponse] = useState([]);
  const socket = socketIOClient(process.env.WEBSOCKET_ENDPOINT);
  const { emailParam } = useParams()
   useEffect(() => {
    socket.on("mensajes", (data) => {
      console.log(data)
      if (emailParam) {
        const mensajesPropios = data.filter((o) => o.email === emailParam);
        console.log(mensajesPropios)
        setMensajesSocket(mensajesPropios);
      } else {
        setMensajesSocket(data);
      }
    });
   }, [emailParam]);
  const handleClick = () => {
    const messageToSend = {
      email: email,
      message: mensaje,
      type: 'user',
    };
    socket.emit("update", messageToSend);
  }
  return (
    <>
      <Header />
      <div className="container">
        <h1>Bienvenido {authState.user.firstName}</h1>
        <SidebarAccount />
        <div className="products-container">
          <div className="message-container">
            {mensajesSocket.reverse().map((mensaje, index) => {
              return (
                <div className='mensaje' key={index}>
                  <span className='mensaje-date'>{moment(mensaje.createdAt).format('DD/MM/YYYY')}</span>
                  <span className='mensaje-email'>{mensaje.email} : </span>
                  <span className='mensaje-message'>{mensaje.message}</span>
                </div>
              )
            })} 
          </div>
          <form onSubmit={e => {
	            e.preventDefault();
	            handleClick();
	            setMensaje([]);
	          }}>
            <input
              type="text"
              placeholder="email@email.com"
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              placeholder="Escribi tu mensaje"
              onChange={(e) => setMensaje(e.target.value)}
              cols="80"
              rows="5"
            />
            <input type="submit"  className='btn' value={'Enviar mensaje'} />
          </form>
        </div>
      </div>
    </>
  );

}
