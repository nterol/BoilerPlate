import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate } from '../actions/filters';

const ExpenseListFilters = (props) => (
    <div>
        <input type="text" value={props.filters.text} onChange={
            (e) => {
                props.dispatch(setTextFilter(e.target.value))
            }}>
        </input>
        <select
            value={props.filters.sortBy}
            onChange={
                (e) => {
                    console.log(e.target.value);
                    e.target.value === 'date' ? props.dispatch(sortByDate()) : props.dispatch(sortByAmount());
                }
            }>
            <option value="date">Date</option>
            <option value="amount">Amount</option>
        </select>
    </div>
);

const mapStatetoProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStatetoProps)(ExpenseListFilters);
