import React from 'react';
import Todo from './Todo';

const TodoList = props => { //tehdään funktio

    const { todos, onRemove, onToggle } = props;

    return (

        <div>
            <h2>TO DOs in my list</h2>
            <ul>
                {todos
                //.filter(todo => todo.done)
                    .map((todo, i) => {  //enkelisulut tarkoittavat että javascript alkaa, tehdään komponentti
                    return (
                     <Todo
                        key={i}
                        onToggle={onToggle}
                        todo={todo}
                        onRemove={onRemove}  />
                        );
                })}
            </ul>
        </div>
    );

};

export default TodoList;
