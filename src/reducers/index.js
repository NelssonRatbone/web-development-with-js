import { List, Map } from 'immutable';
import uuid from 'node-uuid';
import { ADD_TODO } from '../actions/todo-actions';

const defaultState = Map({
    todos: List.of(
    {
        text:'miauuuuu',
        done: true
    },
    {
        text:'vuhvuh',
        done: true
    },
    {
        text:'örkki',
        done: false
    },
    {
        text:'turkulaine hevone',
        done: true
    },
    {
        text:'joku muu elukka',
        done: false
    }
    ).map(todo => {
        return {
            ...todo,
            id: uuid.v4()   //tällä lisätään ID jokaiseen listan kohtaan
        };
    })
});

export default function(state = defaultState, action) {

    console.log(action, 'getting an action');

    switch (action.type) {

        case ADD_TODO:
            return state.update('todos', todos => todos.push(action.payload));
            break;

        default:
            return state;
    }
};
