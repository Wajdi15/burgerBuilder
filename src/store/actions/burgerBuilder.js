import * as actionType from "./actionsType";
import axios from "../../axiosOrders";

export const countinueYourPurchase = () => {
  return {
    type: actionType.GO_BACK_TO_CHECKOUT,
  };
};
export const addIngredients = (ingType) => {
  return { type: actionType.ADD, ingType: ingType };
};
export const removeIngredients = (ingType) => {
  return { type: actionType.REMOVE, ingType: ingType };
};

export const getIngredients = () => {
  return (dispatch) => {
    axios
      .get("/ingredients.json")
      .then((response) => {
        dispatch(get(response.data));
      })
      .catch((error) => {
        dispatch(errorHandler());
      });
  };
};
const get = (ing) => {
  return {
    type: actionType.GET_INGREDIENTS,
    ingredients: ing,
  };
};
const errorHandler = () => {
  return {
    type: actionType.HANDLE_ERROR,
  };
};
