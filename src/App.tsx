import React from 'react';
import {

  QueryClient,
  QueryClientProvider,
} from 'react-query'

import { Provider } from 'react-redux'

import store from './redux/store/store'

import Routes from './routes/routes';

import CssBaseline from '@material-ui/core/CssBaseline';


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
