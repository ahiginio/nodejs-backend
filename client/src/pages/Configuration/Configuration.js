import axios from 'axios'
import {useState, useEffect, useContext} from 'react'
import { AuthContext } from '../../context/AuthContext'
import Header from '../../components/Header/Header'
export default function Configuration () {
  const {authState} = useContext(AuthContext)
  const [configuraciones, setConfiguraciones ] = useState()
  useEffect(() => {
    axios.get(`http://localhost:8080/api/configuration`,{
    
          headers: {
            Authorization: `Bearer ${authState.token}`,
          },
       
    }).then((response) => {
      setConfiguraciones(response.data.configuraciones.parsed)
    })
  },[])
  console.log(configuraciones)
  return (
    <>
      <Header />
      <div className="container">
        <div className="configurations" style={{ width: "100%" }}>
          <h1>Configuraciones del servidor</h1>
          {configuraciones && (
            <>
              <p>API_URL : {configuraciones.API_URL}</p>
              <p>JWT_SECRET : {configuraciones.JWT_SECRET}</p>
              <p>MONGO_DB_URI : {configuraciones.MONGO_DB_URI}</p>
              <p>MONGO_DB_URI_DEV : {configuraciones.MONGO_DB_URI_DEV}</p>
              <p>
                SKIP_PREFLIGHT_CHECK : {configuraciones.SKIP_PREFLIGHT_CHECK}
              </p>
              <p>TOKEN_EXPIRES_IN : {configuraciones.TOKEN_EXPIRES_IN}</p>
              <p>WHITELISTED_DOMAINS : {configuraciones.WHITELISTED_DOMAINS}</p>
              <p>PORT : {configuraciones.PORT}</p>
              <p>ADMIN_EMAIL : {configuraciones.ADMIN_EMAIL}</p>
            </>
          )}
        </div>
      </div>
    </>
  );
}