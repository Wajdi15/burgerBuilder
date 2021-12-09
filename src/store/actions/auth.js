import * as actionType from "./actionsType";
import axios from "axios";

export const authStart = () => {
  return {
    type: actionType.AUTH_START,
  };
};

export const authSuccess = (idToken,userId) => {
  return {
    type: actionType.AUTH_SUCCESS,
    idToken : idToken,
    userId : userId
  };
};

export const authFail = (error) => {
  return {
    type: actionType.AUTH_FAIL,
    error: error,
  };
};
export const authLogout = () => {
  localStorage.removeItem('token')
  localStorage.removeItem('id')
  localStorage.removeItem('expiresIn')
  return {
    type : actionType.AUTH_LOGOUT,
  }
}
export const checkAuthTimeout = (expirationTime) => {
  return dispatch => 
  {
    setTimeout(() => {
      dispatch(authLogout())
    }, expirationTime * 1000);
  }
}
export const auth = (email, password,isSignup) => {
  return (dispatch) => {
    dispatch(authStart());
    const data = {
      email: email,
      password: password,
      returnSecureToken: true,
    };
    let url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key="+process.env.REACT_APP_API_KEY;
    if (isSignup){
        
        url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key="+process.env.REACT_APP_API_KEY;
    }

    axios
      .post(
       url ,
        data
      )
      .then( response =>{
        
        const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000);
        localStorage.setItem('token', response.data.idToken);
        localStorage.setItem('expirationDate', expirationDate);
        localStorage.setItem('userId', response.data.localId);
        dispatch(authSuccess(response.data.idToken,response.data.localId))
        dispatch(checkAuthTimeout(response.data.expiresIn))
      }
         
      )
      .catch(err => {
        dispatch(authFail(err.response.data.error));
    });
  };
};

export const authCheckState = () =>{
  return dispatch => {
    const expirationDate = new Date(localStorage.getItem('expirationDate'))
    const token = localStorage.getItem('token')
    const id = localStorage.getItem('userId')
    if(!token){
      dispatch(authLogout())
    }
     if (expirationDate <= new Date()){
      dispatch(authLogout())
    }else {
      dispatch(authSuccess(token,id))
      dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000 ));
    }
  }

}
