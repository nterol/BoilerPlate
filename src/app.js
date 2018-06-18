import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisisibleExpenses from "./selectors/expenses";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "./firebase/firebase";
import GameOver from "./components/GameOver";

// const store = configureStore();

// store.subscribe(() => {
//     const state = store.getState();
//     const visible = getVisisibleExpenses(state.expenses, state.filters);

// })

// // setTimeout(() => {
// //     store.dispatch(setTextFilter('Bill'));
// // }, 3000)

// const jsx = (
//     <Provider store={store}>
//         <AppRouter />
//     </Provider>
// );

// ReactDOM.render(jsx, document.getElementById('app'));

ReactDOM.render(<GameOver />, document.getElementById("app"));
