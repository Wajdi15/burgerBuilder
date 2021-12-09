import * as actionType from "../actions/actionsType";
import updatedObject from "../utility";

const intialState = {
  idToken: null,
  userId: null,
  error: null,
  loading: false,

};
const authStart = (state) => {
  return updatedObject(state, { error: null, loading: true });
};
const authSuccess = (state, action) => {
    return updatedObject(state, { idToken : action.idToken,userId :action.userId ,loading: false });
  };
  const authFail = (state, action) => {
    return updatedObject(state, { error:action.error, loading: false});
  };
  const authLogout = (state, action) => {
    return updatedObject(state, { idToken : null,userId : null ,loading: false });
  };
const reducer = (state = intialState, action) => {
  switch (action.type) {
    case actionType.AUTH_START:
      return authStart(state);
    case actionType.AUTH_SUCCESS:
      return authSuccess(state, action);
    case actionType.AUTH_FAIL:
     return  authFail(state, action);
     case actionType.AUTH_LOGOUT:
        return  authLogout(state, action);
    default:
      return state;
  }
};
export default reducer;
