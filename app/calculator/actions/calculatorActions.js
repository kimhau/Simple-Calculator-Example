const types ={
  DISPLAY: 'DISPLAY',
  ADD: 'ADD',
  MINUS: 'MINUS',
  MULTIPLY: 'MULTIPLY',
  DIVIDE: 'DIVIDE',
  DECREMENT: 'DECREMENT',
  CALCULATE: 'CALCULATE',
}

export const actionCreators = {
  display: (number) => {
    return {type: types.DISPLAY, payload: number}
  },
  remove: (index) => {
    return {type: types.REMOVE, payload: index}
  },
  add: () => {
    return {type: types.ADD}
  },
  minus: () => {
    return {type: types.MINUS}
  },
  MULTIPLY: () => {
    return {type: types.MULTIPLY}
  },
  DIVIDE: () => {
    return {type: types.DIVIDE}
  },
  calculate: () => {
    return {type: types.CALCULATE}
  }

}
