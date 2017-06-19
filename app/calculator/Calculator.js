
'use strict'
import { Constants } from 'expo';
import NumPad from './component/NumPad';
import Output from './component/Output';
import { connect } from 'react-redux'
import React, { Component } from 'react';
import {View, StyleSheet} from 'react-native';

export default class Calculator extends Component {

  _onPressButton = () => {}
  render() {
    const {number,output} = this.props
    return (
      <View style={styles.container}>
        <Output/>
        <NumPad/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  numButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    borderWidth: 1,
    borderColor: "grey"
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});

//
// export default connect(mapStateToProps)(Calculator)
