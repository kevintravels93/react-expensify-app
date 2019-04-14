import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense, removeExpense, editExpense } from './actions/expenses';
import expensesReducer from './reducers/expenses';
import {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from './actions/filters';
import filtersReducer from './reducers/filters';
import getVisibleExpeneses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

console.log(store.getState())


store.dispatch(addExpense({
    description: 'Water bill', amount: 200, createdAt: 10000
}));

store.dispatch(addExpense({
    description: 'Gas bill', amount: 300, createdAt: 11000
}));

store.dispatch(addExpense({
    description: 'Rent', amount: 100, createdAt: 12000
}));

store.dispatch(sortByAmount());


//setTimeout(() => {
//   store.dispatch(setTextFilter("bill"));
//}, 3000)

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpeneses(state.expenses, state.filters);
    console.log(visibleExpenses);
});


const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);


ReactDOM.render(jsx, document.getElementById('app'));

