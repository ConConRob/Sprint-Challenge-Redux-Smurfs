import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { Provider } from 'react-redux';
import {smurfReducer} from './reducers';
import { reducer as formReducer } from "redux-form";
import {SET_UPDATING_SMURF} from './actions/index'
const reducers = {
  smurfReducer,
  form: formReducer.plugin({
    createSmurf: (state, action) => {
      switch(action.type) {
        case SET_UPDATING_SMURF:
          return {
            ...state,
            values: {
              name: action.payload.name,
              age: action.payload.age,
              height: action.payload.height,
            }
          }
        default:
          return state
      }
    }
  })
}

const rootReducers = combineReducers(reducers)
const store = createStore(
  rootReducers,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
