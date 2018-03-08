import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';









//Get Visible Expenses



store.subscribe(() => {
    const state = store.getState()
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses)
});

const eOne = store.dispatch(addExpense({ description: 'rent', amount: 100, createdAt: -21000 }));



const eTwo = store.dispatch(addExpense({ description: 'coffee', amount: 25, createdAt: -1000 }));
const eThree = store.dispatch(addExpense({ description: 'skate', amount: 500, createdAt: -1050 }));
// store.dispatch(removeExpense({ id: eOne.expense.id }))

// store.dispatch(editExpense(eTwo.expense.id, { note: 'Putain que c\'est cher wallah', amount: 777 }))
store.dispatch(sortByAmount())
store.dispatch(sortByDate())

// store.dispatch(sortByDate());
// store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1250));
// store.dispatch(setTextFilter())
// store.dispatch(sortByAmount());