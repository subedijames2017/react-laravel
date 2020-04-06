const initialState = {
  expenses: [],
  expense: [],
  isLoggedIn: {},
};
const expenseReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LIST":
      return {
        ...state,
        expenses: action.payload,
      };
    case "ADD":
      return {
        ...state,
        expense: action.payload,
      };
    default:
      return state;
  }
};
export default expenseReducer;
