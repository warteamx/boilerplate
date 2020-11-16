import React from 'react';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware, Store } from 'redux'
import { rootReducer, RootState } from './store/reducers'
import thunk from "redux-thunk";

import Routes from './routes/routes';

import CssBaseline from '@material-ui/core/CssBaseline';

const store: Store<RootState> & {
  dispatch: DispatchType;
} = createStore(rootReducer, applyMiddleware(thunk))

function App() {

  return (
    <Provider store={store}>
      <CssBaseline />
      <Routes />
    </Provider>
  );
}

export default App;
