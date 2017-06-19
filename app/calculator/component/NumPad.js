
'use strict'
import { Constants } from 'expo';
import NumButton from './NumButton';
import { connect } from 'react-redux'
import React, { Component } from 'react';
import {View, StyleSheet} from 'react-native';

export default class NumPad extends Component {

  _onPressButton = () => {}
  render() {
  //  const {number} = this.props
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <NumButton val='1'/>
          <NumButton val='2'/>
          <NumButton val='3'/>
          <NumButton val='÷'/>
        </View>
        <View style={styles.row}>
          <NumButton val='4'/>
          <NumButton val='5'/>
          <NumButton val='6'/>
          <NumButton val='x'/>
        </View>
        <View style={styles.row}>
          <NumButton val='7'/>
          <NumButton val='8'/>
          <NumButton val='9'/>
          <NumButton val='-'/>
        </View>
        <View style={styles.row}>
          <NumButton val='.'/>
          <NumButton val='0'/>
          <NumButton val='='/>
          <NumButton val='+'/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: '#ecf0f1',
  },
  row: {
    flexDirection:'row',
    justifyContent: 'space-between',
  },
});
