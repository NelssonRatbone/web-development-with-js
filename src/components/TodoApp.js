import React from 'react';
import TodoList from './TodoList';
import { List } from 'immutable';
import TodoForm from './TodoForm';

export default class TodoApp extends React.Component {

    render() {

        const { todos, addTodo } = this.props;

        return (
            <div>
                  <TodoList
                    onToggle={this.toggleTodo.bind(this)}
                    onRemove={this.removeTodo.bind(this)}
                    todos={todos}
                    />
                  <TodoForm onAdd={addTodo} />
            </div>
        );
    }

    removeTodo(id){

        const { todos } = this.state;

        this.setState({
            todos: todos.remove(
                todos.findIndex(t => t.id === id)
            )
        });
        //alert(id); //this makes an alert
    }

    toggleTodo(id){

        const { todos } = this.state;

        this.setState({
            todos: todos.update(
                todos.findIndex(t => t.id === id),
                todo => {
                    return {
                        ...todo,
                        done: !todo.done
                    };
                }
            )
        });
    }
}
