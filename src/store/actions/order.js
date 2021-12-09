import * as actionType from "./actionsType";
import axios from "../../axiosOrders";

const orders = (orders) => {
  return {
    type: actionType.GET_ORDERS,
    orders: orders,
  };
};
const purchaseBurgerSuccess = (id, orderData) => {
  return {
    type: actionType.PURCHASE_BURGER_SUCCESS,
    orderData: orderData,
    id: id,
  };
};
const purchaseBurgerFail = (error) => {
  return {
    type: actionType.PURCHASE_BURGER_FAIL,
    error: error,
  };
};
export const purshaseBurgeStart = (orderData, token) => {
  return (dispatch) => {
    axios
      .post("/orders.json?auth=" + token, orderData)
      .then((response) => {
     
        dispatch(purchaseBurgerSuccess(response.data.name, orderData));
      })
      .catch((err) => {

        dispatch(purchaseBurgerFail(err));
      });
  };
};
export const purchaseBurgerInit = () => {
  return {
    type: actionType.PURCHASE_BURGER_INIT,
  };
};

export const fetchOrders = (token,id) => {
  return (dispatch) => {
    const queryParam = '?auth='+token+'&orderBy="id"&equalTo="'+id+'"';
    axios
      .get("/orders.json"+queryParam)
      .then((response) => {
        dispatch(orders(response.data));
      })
      .catch((error) => {
        console.error(error);
      });
  };
};
