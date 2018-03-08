import React from 'react';
import { removeExpense } from '../actions/expenses';
import { connect } from 'react-redux';

const ExpenseListItem = ({ dispatch, description, amount, createdAt, id }) => (
    <div>
        <h3>{description}</h3>
        <p>{amount} - {createdAt}</p>
        <button onClick={
            () => { dispatch(removeExpense({ id })); }
        }>Remove Expense</button>
    </div >
);

export default connect()(ExpenseListItem);