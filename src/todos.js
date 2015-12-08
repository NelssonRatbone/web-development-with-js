import { List } from 'immutable';
import uuid from 'node-uuid';   //importtaa id-hässäkät

export default List.of(
    {
        text:'miauuuuu',
        done: false
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
});
