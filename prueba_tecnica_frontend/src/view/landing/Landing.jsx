import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Products from "../../components/products/Products";
import { getAllProducts } from "../../redux/actions";

const Landing = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.allProducts);
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);
  //   console.log(products);
  return (
    <div>
      <Products products={products} />
    </div>
  );
};

export default Landing;
