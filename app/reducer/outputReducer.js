import { combineReducers } from 'redux';

const initialState = {
  val: '234',
  input: [],
  sign: '',
}

export function calculator(state = initialState, action) {
  const {val} = state
  const {type, payload} = action

  switch (action.type) {
    case "DISPLAY":
    // x = state*1;
    // y = payload*1;
    // answer = x + y
     answer = state + payload
     while(answer[0]==0){
       if(answer.length==1)break
       answer = answer.slice(1);
    }
    return [...state,val:answer]
    case "ADD":

    default:
      return state;
  }
}

const OutputReducer = combineReducers({
  calculator,
});

export default OutputReducer;
