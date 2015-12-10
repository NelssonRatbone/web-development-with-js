import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router';
import Icon from 'react-fa';

const Todo = props => {

    console.log(props);

    const { todo, onRemove, onToggle, onMove } = props;


    const classes = classnames(
        'todo',
        {
            done: todo.done
        }
    );

    return (
        <div className={classes}>

            <Link to={`/todo/${todo.id}`}>{todo.text}</Link>
            <button onClick={onToggle.bind(null, todo.id)}><Icon name="toggle-on" /></button>
            <button onClick={onRemove.bind(null, todo.id)}><Icon name="remove" /></button>

            {todo.category !== 0 && <button onClick={onMove.bind(null, todo.id, -1)}><Icon name="toggle-left" /></button>}
            {todo.category !== 2 && <button onClick={onMove.bind(null, todo.id, 1)}><Icon name="toggle-right" /></button>}


        </div>
    );
};

export default Todo;
