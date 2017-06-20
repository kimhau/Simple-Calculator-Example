import { combineReducers } from 'redux';

const initialState = {
  val: 0,
  lastVal: 0,
  input: [],
  sign: '',
}

export function calculator(state = initialState, action) {
  const {val,lastVal,sign} = state
  const {type, payload} = action

  switch (action.type) {
    case "DISPLAY":
      if(payload=='.'&& val.toString().indexOf('.')>-1) return state
      newVal = val + payload
      while(newVal[0]==0){
        if(newVal.length==1)break
        newVal = newVal.slice(1);
      }
      return {...state,val:newVal}

    case "ADD":
    switch (sign) {
      case "+":
      return {...state,lastVal:lastVal*1 + val*1,val:0,}
      case "-":
      return {...state,lastVal:lastVal*1 - val*1,val:0, sign:'+'}
      case "x":
      return {...state,lastVal:(lastVal*1) * (val*1),val:0, sign:'+'}
      case "÷":
      return {...state,lastVal:(lastVal*1) / (val*1),val:0,sign:'+'}
      default:
      return {...state,lastVal:val,val:0,sign:'+'}
    }


    case "MINUS":
    switch (sign) {
      case "+":
      return {...state,lastVal:lastVal*1 + val*1,val:0,sign:'-'}
      case "-":
      return {...state,lastVal:lastVal*1 - val*1,val:0,}
      case "x":
      return {...state,lastVal:(lastVal*1) * (val*1),val:0, sign:'-'}
      case "÷":
      return {...state,lastVal:(lastVal*1) / (val*1),val:0,sign:'-'}
      default:
      return {...state,lastVal:val,val:0,sign:'-'}
    }

    case "MULTIPLY":
    switch (sign) {
      case "+":
      return {...state,lastVal:lastVal*1 + val*1,val:0,sign:'x'}
      case "-":
      return {...state,lastVal:lastVal*1 - val*1,val:0,sign:'x'}
      case "x":
      return {...state,lastVal:(lastVal*1) * (val*1),val:0}
      case "÷":
      return {...state,lastVal:(lastVal*1) / (val*1),val:0,sign:'x'}
      default:
      return {...state,lastVal:val,val:0,sign:'x'}
    }

    case "DIVIDE":
    switch (sign) {
      case "+":
      return {...state,lastVal:lastVal*1 + val*1,val:0,sign:'÷'}
      case "-":
      return {...state,lastVal:lastVal*1 - val*1,val:0,sign:'÷'}
      case "x":
      return {...state,lastVal:(lastVal*1) * (val*1),val:0,sign:'÷'}
      case "÷":
      return {...state,lastVal:(lastVal*1) / (val*1),val:0}
      default:
      return {...state,lastVal:val,val:0,sign:'÷'}
    }

    case "CALCULATE":
      switch (sign) {
        case "+":
        return {...state,lastVal:0,val:lastVal*1 + val*1,sign:''}
        case "-":
        return {...state,lastVal:0,val:lastVal*1 - val*1,sign:''}
        case "x":
        return {...state,lastVal:0,val:(lastVal*1) * (val*1),sign:''}
        case "÷":
        return {...state,lastVal:0,val:(lastVal*1) / (val*1),sign:''}
        default:
        return {...state,lastVal:0,val:lastVal*1 + val*1,sign:''}
      }

    default:
    return state;

  }
}

const OutputReducer = combineReducers({
  calculator,
});

export default OutputReducer;
