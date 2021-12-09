import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose ,combineReducers} from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import burgerBuilderReducer from "./store/reducer/burgerBuilder";
import orderReducer from "./store/reducer/order";
import authReducer from "./store/reducer/auth";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

const rootReducer = combineReducers({
  burger : burgerBuilderReducer,
  order : orderReducer,
  auth : authReducer
}) 
const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__  : null || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
