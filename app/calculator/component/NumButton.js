import React, { Component } from 'react';
import { Constants } from 'expo';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import actionCreators from '../actions/calculatorActions'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    output: state.output
  }
}

class NumButton extends Component {
  constructor(props) {
    super(props);
    this.state = {number: 0};
  }


  _onPressButton = () => {
    const {dispatch,val} = this.props
    //dispatch(actionCreators.display())
    if (val =='+') return
    else if(val !='÷' && val !='x' && val !='-' && val !='+' && val !='=')
    dispatch({type: "DISPLAY", payload: val})
  }
  render() {
      const {val} = this.props
    return (
      <TouchableOpacity onPress={this._onPressButton}>
        <Text style={styles.text}>{val}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
  text: {
    margin: 24,
    fontSize: 25,
    textAlign: 'center',
    color: '#34495e',
  },
});

export default connect(mapStateToProps)(NumButton)
