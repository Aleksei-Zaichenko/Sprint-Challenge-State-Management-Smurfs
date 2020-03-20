import React, { Component } from "react";
import "./App.css";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import {SmurfsReducer as reducer} from '../reducers/smurfsReducer';

import GetSmurfsData from './getSmurfsData';
import DisplaySmurfsList from './displaySmurfsList';
import {PostSmurfData} from './postSmurfData';

const store = createStore(reducer, applyMiddleware(thunk));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <h1>SMURFS! 2.0 W/ Redux</h1>
          <div>Welcome to your state management version of Smurfs!</div>
          <div>Start inside of your `src/index.js` file!</div>
          <div>Have fun!</div>
          <PostSmurfData />
          <GetSmurfsData/>
          <DisplaySmurfsList />
        </div>
      </Provider>
    );
  }
}

export default App;
