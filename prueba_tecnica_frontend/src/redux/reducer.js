import {
  GETALLPRODUCTS,
  GETPRODUCTBYID,
  GETPRODUCTBYNAME,
  DELETEPRODUCT,
  UPDATEPRODUCT,
  CREATEPRODUCT,
} from "./actionsType";

const initialState = {
  allProducts: [],
  auxProducts: [],
  productDetail: {},
};

const reducer = (state = initialState, actions) => {
  switch (actions.type) {
    case GETALLPRODUCTS:
      return {
        ...state,
        allProducts: actions.payload,
      };
    case GETPRODUCTBYID:
      return {
        ...state,
        productDetail: actions.payload,
      };
    case GETPRODUCTBYNAME:
      return {
        ...state,
        auxProducts: actions.payload,
      };
    case CREATEPRODUCT:
      return {
        ...state,
        allProducts: [...state.allProducts, actions.payload],
      };
    case UPDATEPRODUCT:
      let allProductsUpdate = [...state.allProducts];
      let productFindUpdate = allProductsUpdate.findIndex(
        (elem) => elem._id === actions.payload._id
      );
      allProductsUpdate[productFindUpdate] = actions.payload;
      return {
        ...state,
        allProducts: [...allProductsUpdate],
      };
    case DELETEPRODUCT:
      let allProductsDelete = [...state.allProducts];
      let productFindDelete = allProductsDelete.findIndex(
        (elem) => elem._id === actions.payload._id
      );
      allProductsDelete[productFindDelete] = actions.payload;
      return {
        ...state,
        allProducts: [...allProductsDelete],
      };
    default:
      return { ...state };
  }
};

export default reducer;
