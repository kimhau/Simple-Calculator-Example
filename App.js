import React from 'react';
import { StyleSheet, Text, View ,Button} from 'react-native';
import { Provider } from 'react-redux'
// import store from './app/store'
import Calculator from './app/calculator/Calculator'
import { createStore } from 'redux';
import  OutputReducer  from './app/reducer/outputReducer'
//import {} from 'native-base'

export default class App extends React.Component {
  store = createStore(OutputReducer);
  render() {
    return (
      <Provider store={this.store}>
        <Calculator/>
      </Provider>

    );
  }
}
