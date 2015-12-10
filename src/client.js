import './client.less';
import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import { Provider } from 'react-redux';
import TodoApp from './components/smart/TodoAppContainer';
import IndexPage from './components/smart/IndexPageContainer';
import TodoPage from './components/smart/TodoPageContainer';

import { Router, Route, IndexRoute } from 'react-router';
import { createHistory } from 'history';

const app = (
    <Provider store={store}>
        <Router history={createHistory()}>
            <Route path="/" component={TodoApp}>
                <IndexRoute component={IndexPage}/>
                <Route path="todo/:uuid" component={TodoPage}/>
            </Route>
        </Router>
    </Provider>
);

ReactDOM.render(
    app,
    document.getElementById('app')
);




//WTF IS DOM?
//The react-dom package provides DOM-specific methods that can be used at the top level of your app and
//as an escape hatch to get outside of the React model if you need to. Most of your components should not need to use this module.




//POISTETUT RIVIT ALLA

//console.log(todos, 'todos');
//console.log('quack says the cow');

//alert("Hi! Moi! Hello! Tsau!");
//alert("Uudestaan!");
//alert("Ja tuplarivi!\nEikö ookkin siistiä?");

//prompt("Please enter your name", "Harry Potter");
