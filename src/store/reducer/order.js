import * as actionType from "../actions/actionsType";

let intitalState = {
  orders: [],
  loading: false,
  purchased : false
};
const reducer = (state = intitalState, action) => {
  switch (action.type) {
    case actionType.PURCHASE_BURGER_INIT:
      return {
        ...state,
        purchased: false,
      };
    case actionType.PURCHASE_BURGER_SUCCESS:

      return {
        ...state,
        loading: false,
        purchased: true,
      };
    case actionType.PURCHASE_BURGER_FAIL:
      return {
        ...state,
        loading: false,
      };
    case actionType.PURCHASE_BURGER_START:
      return {
        ...state,
        loading: true,
      };
      case actionType.GET_ORDERS : 
        return {
          ...state,
          orders : action.orders
        }
    default:
      return state;
  }
};
export default reducer;
