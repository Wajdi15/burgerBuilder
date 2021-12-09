import * as actionType from "../actions/actionsType";
import updatedObject from "../utility"
const intialState = {
  ingredients: null,
  price: 4,
  purchasable: true,
  error: false,
  continuePurchase : false
};
const INGREDIENTS_PRICES = {
  salad: 0.4,
  bacon: 0.5,
  cheese: 0.3,
  meat: 1.3,
};
const addIng = (state,action) =>{
  const ingM = { ...state.ingredients };
  ingM[action.ingType] = ingM[action.ingType] + 1;
 const  updatedObjects = {
    ingredients: ingM,
    price: state.price + INGREDIENTS_PRICES[action.ingType],
    purchasable: updatePurchaseState(ingM),
  }
  return updatedObject(state,updatedObjects);
}
const reducer = (state = intialState, action) => {
  switch (action.type) {
    case actionType.ADD:
     return addIng(state,action);
    case actionType.REMOVE:
      const ingL = { ...state.ingredients };
      ingL[action.ingType] = ingL[action.ingType] - 1;
      return {
        ...state,

        ingredients: ingL,
        price: state.price - INGREDIENTS_PRICES[action.ingType],
        purchasable: updatePurchaseState(ingL),
      };
    case actionType.GET_INGREDIENTS:
      return {
        ...state ,
        continuePurchase : false,
        ingredients : {
          ...action.ingredients
        },
        error : false,
        price: 4,
      }
      case actionType.HANDLE_ERROR :
        return {
          ...state ,
          error : true
        }
        case actionType.GO_BACK_TO_CHECKOUT:
          return {
            ...state,
            continuePurchase : true
          }
    default:
      return state;
  }
};
const updatePurchaseState = (ingredient) => {
  let sum = Object.keys(ingredient)
    .map((igKey) => {
      return ingredient[igKey];
    })
    .reduce((sum, el) => {
      return sum + el;
    }, 0);
  return sum <= 0;
};
export default reducer;
