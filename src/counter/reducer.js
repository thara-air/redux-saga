const initialState = {status:0}
export const countReducer = function (initialState, action) {
  
  switch (action.type) {
    case "INCREMENT":
      return {...initialState,status:status++};
    case "DECREMENT":
      return {...initialState,status:status--};
    default:
      return {...initialState};
  }
};
