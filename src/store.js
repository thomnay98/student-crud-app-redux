import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';

function saveToLocalStorage(state) {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem("localData", serializedState);
    } catch (e) {
      console.warn(e);
    }
}

function loadFromLocalStorage() {
    try {
      const serializedState = localStorage.getItem("localData");
      if (serializedState === null) return undefined;
      return JSON.parse(serializedState);
    } catch (e) {
      console.warn(e);
      return undefined;
    }
}

const store = createStore(
    rootReducer, 
    loadFromLocalStorage(), 
    composeWithDevTools(),
);

store.subscribe(() => saveToLocalStorage(store.getState()));

// store.subscribe(() => {
//     const state = store.getState();
//     Object.keys(state).forEach( key => {
//         saveToLocalStorage(key, state[key])
//         console.log(key);
//     })
// });

export default store;