import React from 'react';

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import PrimeReact from 'primereact/utils';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware, Store } from 'redux'
import {rootReducer, RootState} from './store/reducers'
import thunk from "redux-thunk";

import Routes from './routes/routes';

const store : Store <RootState> & {
  dispatch: DispatchType;
} = createStore(rootReducer , applyMiddleware(thunk))

function App() {
  PrimeReact.ripple = true
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
