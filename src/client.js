import './client.less';
import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';

import TodoApp from './components/smart/TodoAppContainer';

import { Provider } from 'react-redux';

const app = (
    <Provider store={store}>
        <TodoApp />
    </Provider>
);

ReactDOM.render(
    app,
    document.getElementById('app')
);



//console.log(todos, 'todos');
//console.log('quack says the cow');

//alert("Hi! Moi! Hello! Tsau!");
//alert("Uudestaan!");
//alert("Ja tuplarivi!\nEikö ookkin siistiä?");

//prompt("Please enter your name", "Harry Potter");
