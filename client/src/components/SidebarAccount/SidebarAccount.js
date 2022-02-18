import {useContext} from 'react'
import { Link } from "react-router-dom";
import {AuthContext} from '../../context/AuthContext'
export default function SidebarAccount() {
  const {authState} = useContext(AuthContext)
  return (
    <div className="sidebar">
      <h1>Mi cuenta</h1>
      <ul className="categories">
        <li>
          <Link to="/chat">Todos los mensajes</Link>
        </li>
        <li>
          <Link to={`/chat/${authState.user.email}`}>Mis mensajes</Link>
        </li>
      </ul>
    </div>
  );
}
