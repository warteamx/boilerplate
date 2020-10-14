import React from 'react';


import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './store/reducers'

import Routes from './routes/routes';

const store = createStore(rootReducer)

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
