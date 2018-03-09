import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

const DashBoard = () => (
    <div>
        <ExpenseListFilters />
        <ExpenseList />
    </div>
);

export default DashBoard;