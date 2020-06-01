import { createStore, combineReducers } from 'redux';
import { mainNavReducer, navsReducer, selectedNavReducer } from '../reducers/sidenav';


export default () => {
  const store = createStore(
    combineReducers({
      mainNav: mainNavReducer,
      navs: navsReducer,
      selectedNav: selectedNavReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};