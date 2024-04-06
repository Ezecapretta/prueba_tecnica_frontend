import { useEffect } from "react";
import "./App.css";
import { getAllProducts } from "./redux/actions";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
axios.defaults.baseURL =
  "https://pruebatecnicabackend-production-97f0.up.railway.app";

function App() {
  const products = useSelector((state) => state.allProducts);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getAllProducts());
    };
    fetchData();
  }, [dispatch]);
  console.log(products);
  return (
    <div className="App">
      <p>hola</p>
    </div>
  );
}

export default App;
