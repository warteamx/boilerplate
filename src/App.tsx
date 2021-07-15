import React from 'react';
import {

  QueryClient,
  QueryClientProvider,
} from 'react-query'

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


  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient} >
      <Provider store={store}>
        <CssBaseline />
        <Routes />
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
