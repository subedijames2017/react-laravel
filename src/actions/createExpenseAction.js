import axios from "axios";
export const expenseList = () => (dispatch) => {
  axios
    .get("http://localhost:8000/api/expenses/")
    .then((res) => {
      dispatch({
        type: "LIST",
        payload: res.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: "LIST",
        payload: {},
      });
    });
};
export const createExpense = (expense) => (dispatch) => {
  axios
    .post("http://localhost:8000/api/expenses/", expense)
    .then((res) => {
      console.log("createExpense -> res", res);
      dispatch({
        type: "ADD",
        payload: res.data,
      });
    })
    .catch((err) => {});
};
