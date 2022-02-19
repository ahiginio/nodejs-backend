import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
export default function Sidebar() {
  const { authState } = useContext(AuthContext);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/categories`, {
        headers: {
          Authorization: `Bearer ${authState.token}`,
        },
      })
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  },[])
  return (
    <div className="sidebar">
      <h1>Categorias</h1>
      <ul className="categories">
        {categories.map((category) => {
          return (
            <li>
              <Link to={`/products/category/${category._id}`}>
                {category.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
