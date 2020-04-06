import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import Table from "react-bootstrap/Table";
import PropTypes from "prop-types";
import ExpenseTableRow from "./ExpenseTableRow";
import { expenseList } from "../actions/createExpenseAction";

class ExpenseList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.expenseList();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.newExpense) {
      this.props.expenses.unshift(nextProps.newExpense);
    }
  }

  DataTable() {
    console.log("expenses props", this.props);
    return this.props.expenses.map((res, i) => {
      return <ExpenseTableRow obj={res} key={i} />;
    });
  }

  render() {
    return (
      <div className="table-wrapper">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Amount</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{this.DataTable()}</tbody>
        </Table>
      </div>
    );
  }
}
ExpenseList.propTypes = {
  expenseList: PropTypes.func.isRequired,
  expenses: PropTypes.array.isRequired,
};
const mapStateToProps = (state) => ({
  expenses: state.states.expenses,
  newExpense: state.states.expense,
});

export default connect(mapStateToProps, { expenseList })(ExpenseList);
