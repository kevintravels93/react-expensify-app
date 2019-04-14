import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import AddExpense from '../components/AddExpense';
import EditExpense from '../components/EditExpense';
import Help from '../components/Help';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';


const AppRouter = () => (
    <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/create" component={AddExpense} />
            <Route path="/edit/:id" component={EditExpense} /> 
            <Route exact path="/help" component={Help} />
            <Route component={NotFoundPage} /> 
          </Switch>  
        </div>
    </BrowserRouter>
);

export default AppRouter;
