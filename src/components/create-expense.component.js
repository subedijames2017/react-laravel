import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import Swal from "sweetalert2";
import ExpensesList from "./expenses-listing.component";
import { connect } from "react-redux";
import { createExpense } from "../actions/createExpenseAction";
import PropTypes from "prop-types";

class CreateExpense extends Component {
  constructor(props) {
    super(props);

    // Setting up functions
    this.onChangeExpenseName = this.onChangeExpenseName.bind(this);
    this.onChangeExpenseAmount = this.onChangeExpenseAmount.bind(this);
    this.onChangeExpenseDescription = this.onChangeExpenseDescription.bind(
      this
    );
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      name: "",
      description: "",
      amount: "",
    };
  }

  onChangeExpenseName(e) {
    this.setState({ name: e.target.value });
  }

  onChangeExpenseAmount(e) {
    this.setState({ amount: e.target.value });
  }

  onChangeExpenseDescription(e) {
    this.setState({ description: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const expense = {
      name: this.state.name,
      amount: this.state.amount,
      description: this.state.description,
    };
    this.props.createExpense(expense);
    this.setState({
      name: "",
      description: "",
      amount: "",
    });
  }

  render() {
    return (
      <div className="form-wrapper">
        <Form onSubmit={this.onSubmit} id="add-expense-form">
          <Row>
            <Col>
              <Form.Group controlId="Name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.name}
                  onChange={this.onChangeExpenseName}
                />
              </Form.Group>
            </Col>

            <Col>
              <Form.Group controlId="Amount">
                <Form.Label>Amount</Form.Label>
                <Form.Control
                  type="number"
                  value={this.state.amount}
                  onChange={this.onChangeExpenseAmount}
                />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              type="textarea"
              value={this.state.description}
              onChange={this.onChangeExpenseDescription}
            />
          </Form.Group>

          <Button variant="primary" size="lg" block="block" type="submit">
            Add Expense
          </Button>
        </Form>
      </div>
    );
  }
}
CreateExpense.propTypes = {
  createExpense: PropTypes.func.isRequired,
};

export default connect(null, { createExpense })(CreateExpense);
