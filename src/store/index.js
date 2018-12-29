import { applyMiddleware, createStore, compose } from "redux";
import reducers from './reducers';
import thunk from 'redux-thunk';

export default function () {
  return createStore( reducers, compose(applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f=>f
    )
  )
}