const types ={
  DISPLAY: 'DISPLAY',
  ADD: 'ADD',
  DECREMENT: 'DECREMENT',
}

export const actionCreators = {
  display: (number) => {
      return {type: types.DISPLAY, payload: number}
    },
  remove: (index) => {
    return {type: types.REMOVE, payload: index}
  }
}
