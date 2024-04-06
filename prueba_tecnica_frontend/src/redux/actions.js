import axios from "axios";
import {
  GETALLPRODUCTS,
  GETPRODUCTBYID,
  GETPRODUCTBYNAME,
  CREATEPRODUCT,
  UPDATEPRODUCT,
  DELETEPRODUCT,
} from "./actionsType";

// const URL = "pruebatecnicabackend-production-97f0.up.railway.app";

//products
export const getAllProducts = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/product`);
      return dispatch({
        type: GETALLPRODUCTS,
        payload: data,
      });
    } catch (error) {
      alert(error.response.data.error);
    }
  };
};

export const getProductById = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/product/${id}`);
      return dispatch({
        type: GETPRODUCTBYID,
        payload: data,
      });
    } catch (error) {
      alert(error.response.data.error);
    }
  };
};

export const getProductByName = (name) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/product/filter/${name}`);
      return dispatch({
        type: GETPRODUCTBYNAME,
        payload: data,
      });
    } catch (error) {
      alert(error.response.data.error);
    }
  };
};

export const createProduct = (body) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post("/product", body);
      if (data.data._id) {
        return dispatch({
          type: CREATEPRODUCT,
          payload: data.data,
        });
      }
    } catch (error) {
      alert(error.response.data.error);
    }
  };
};

export const updateProduct = (body) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.put("/product", body);
      if (data.data._id) {
        return dispatch({
          type: UPDATEPRODUCT,
          payload: data.data,
        });
      }
    } catch (error) {
      alert(error.response.data.error);
    }
  };
};

export const deleteProduct = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(`/product/${id}`);
      if (data._id) {
        return dispatch({
          type: DELETEPRODUCT,
          payload: data,
        });
      }
    } catch (error) {
      alert(error.response.data.error);
    }
  };
};
