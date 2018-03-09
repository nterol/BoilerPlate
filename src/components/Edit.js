import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense } from '../actions/expenses'

const Edit = (props) => {
    console.log(props);
    return (
        <div>
            <ExpenseForm
                expense={props.expense}
                onSubmit={(expense) => {
                    console.log(expense)
                    props.dispatch(editExpense(expense));
                    props.history.push('/');
                }
                } />
        </div>
    )
}

const mapStatetoProps = (state, props) => {
    return {
        expense: state.expenses.find((e) => e.id === props.match.params.id)
    }
};

export default connect(mapStatetoProps)(Edit);