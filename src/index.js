import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { ThemeProvider } from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';

import { firebase } from './firebase/fire';
import authReducer from './store/reducers/authReducer';
import shopReducer from './store/reducers/shopReducer';
import profileReducer from './store/reducers/profileReducer';
import productReducer from './store/reducers/productReducer';
import theme from './utils/theme';
import GlobalStyles from './utils/global';
import * as Actions from './store/actions/authActions';
import Loader from './components/Loader/Loader';

//react-redux-firebase config
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true,
  attachAuthIsReady: true,
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  cart: shopReducer,
  auth: authReducer,
  firebase: firebaseReducer,
  profile: profileReducer,
  products: productReducer,
});

// RESET STATE DURING LOGOUT
const appReducer = (state, action) => {
  if (action.type === 'SIGN_OUT_SUCCESS') {
    storage.removeItem('persist:root');
    state = undefined;
  }

  return rootReducer(state, action);
};

// Redux Persist Configurations
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['products', 'firebase', 'auth', 'cart'],
};

const persistedReducer = persistReducer(persistConfig, appReducer);

const store = createStore(
  persistedReducer,
  composeEnhancers(
    reactReduxFirebase(firebase, rrfConfig),
    applyMiddleware(thunk)
  )
);

const persistor = persistStore(store);
store.dispatch(Actions.VerifyAuth());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<Loader />} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <>
            <App />
            <GlobalStyles />
          </>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
