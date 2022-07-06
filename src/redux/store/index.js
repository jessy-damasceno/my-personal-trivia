import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistConfig = {
  key: 'root',
  storage,
};

// const setInitialStore = () => {
//   const store = localStorage.getItem('persist:root');
//   if (store) {
//     return JSON.parse(store);
//   }
//   return null;
// }

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));
// export const store = applyMiddleware(thunk)(createStore)(persistedReducer);

export const persistor = persistStore(store);
