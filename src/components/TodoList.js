import React from 'react';
import Todo from './Todo';

const categoryNames = [
    'TOIVOTTU',
    'EHKÄ TULOSSA',
    'PAKETOITU'
];


const TodoList = ({ todos, onRemove, onToggle, category, onMove }) => {

    const filtered = todos.filter(todo => todo.category === category);

    return (

        <div className="flex-item">
            <h2>{filtered.count()} lahja(a) on {categoryNames[category]}</h2>


                {filtered
                    .map((todo, i) =>
                        <Todo
                            key={i}
                            onToggle={onToggle}
                            onRemove={onRemove}
                            onMove={onMove}
                            todo={todo}
                        />
                    )
                }

        </div>
    )

}

export default TodoList;
