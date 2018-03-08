import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();


store.dispatch(addExpense({ description: 'Beer' }))
store.dispatch(addExpense({ description: 'Water Bill', amount: 5000 }));
store.dispatch(addExpense({ description: 'Gas bill', amount: 1500 }));
store.dispatch(addExpense({ description: 'rent', createdAt: 1000, amount: 200 }))

store.subscribe(() => {
    const state = store.getState();
    const visible = getVisisibleExpenses(state.expenses, state.filters);
    console.log(visible);
})

// setTimeout(() => {
//     store.dispatch(setTextFilter('Bill'));
// }, 3000)

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
