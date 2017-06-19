
'use strict'
import { Constants } from 'expo';
import NumButton from './NumButton';
import { connect } from 'react-redux'
import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';

import actionCreators from '../actions/calculatorActions'

const mapStateToProps = (state) => ({
    state: state.calculator,
  }
)


class Output extends Component {
  constructor(props) {
    super(props);
    this.state = {number: 0};
  }

  componentWillMount() {
     const {dispatch} = this.props
     //dispatch(actionCreators.display())
     //dispatch({type: "DISPLAY", payload: 5})
   }
  render() {
    const {state} = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{state.val}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'grey',
  },
  text: {
    margin: 24,
    fontSize: 25,
    textAlign: 'right',
  },
});


export default connect(mapStateToProps)(Output)
