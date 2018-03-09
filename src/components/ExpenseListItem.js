import React from 'react';
import { Link } from 'react-router-dom';
import { removeExpense } from '../actions/expenses';
import { connect } from 'react-redux';

const ExpenseListItem = ({ dispatch, description, amount, createdAt, id }) => (
    <div>
        <Link to={`edit/${id}`} >
            <h3>{description}</h3>
            <p>{amount} - {createdAt}</p>
            {description && <p>{description}</p>}
            <button onClick={
                () => { dispatch(removeExpense({ id })); }
            }>Remove Expense</button>
        </Link >
    </div >
);

export default connect()(ExpenseListItem);