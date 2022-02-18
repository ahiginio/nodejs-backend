import Header from '../../components/Header/Header'
import ProductCard from '../../components/ProductCard/ProductCard'
import Sidebar from "../../components/Sidebar/Sidebar";
import axios from 'axios'
import { AuthContext } from "../../context/AuthContext";
import {useState, useEffect, useContext} from 'react'
import {useParams} from 'react-router-dom'
export default function Category() {
  const { catId } = useParams()
  const { authState } = useContext(AuthContext) 
  const [products, setProducts] = useState([])
  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/products/category/${catId}`, {
        headers: {
          Authorization: `Bearer ${authState.token}`,
        },
      })
      .then((response) => {
        setProducts(response.data);
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [catId]);
 
  return (
    <>
      <Header />
      <div className="container">
        <Sidebar />
        <div className="products">
          <h1>Productos</h1>
          <div className="products-container">
            {products.map((product) => (
              <ProductCard product={product} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}