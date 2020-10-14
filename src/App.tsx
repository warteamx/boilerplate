import React from 'react';

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './store/reducers'

import logo from './logo.svg';
import './App.css';

const store = createStore(rootReducer)

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
  <p>Boiler Plate: Docker - hot reload </p>
          <p>
            Edit <code>src/App.tsx</code> and save to reload
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
      </div>
    </Provider>
  );
}

export default App;
