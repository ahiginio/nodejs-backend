import Header from "../../components/Header/Header";
import Login from "../../components/Login/Login";
import Register from "../../components/Register/Register";
export default function Home() {
  return (
    <>
    <Header />
    <div className="container">
      <h1>Home</h1>
      <Login />
      <Register />
    </div>
    </>
  );
}
