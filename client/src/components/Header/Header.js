import {useContext} from 'react'
import {AuthContext} from '../../context/AuthContext'
import {Link} from 'react-router-dom'
export default function Header() {
  const { authState, isAuthenticated } = useContext(AuthContext);
  return (
    <header>
      <div className="Logo">
        <h1>Logo</h1>
      </div>
      <nav>
        {isAuthenticated ? (
          <>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
            <li>
              <Link to="/chat">Chat</Link>
            </li>
            <li>
              <Link to="/configuration">Configuraciones</Link>
            </li>
            <div className="user">
              {`${authState.user.name} ${authState.user.apellido}`}
            </div>
          </>
        ) : (
          <>
            
          </>
        )}
      </nav>
    </header>
  );
}