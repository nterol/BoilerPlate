import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses'

const Edit = (props) => {
    console.log(props);
    return (
        <div>
            <ExpenseForm
                expense={props.expense}
                onSubmit={(expense) => {
                    console.log(expense)
                    props.dispatch(editExpense(props.expense.id, expense));
                    props.history.push('/');
                }
                } />
            <button onClick={
                () => {
                    props.dispatch(removeExpense({ id: props.expense.id }));
                    props.history.push('/');
                }
            }>Remove Expense</button>
        </div>
    )
}

const mapStatetoProps = (state, props) => {
    return {
        expense: state.expenses.find((e) => e.id === props.match.params.id)
    }
};

export default connect(mapStatetoProps)(Edit);