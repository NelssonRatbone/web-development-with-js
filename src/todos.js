import { List } from 'immutable';
import uuid from 'node-uuid';   //importtaa id-hässäkät

export default List.of(
    {
        text:'Money',
        done: false
    },
    {
        text:'Honda CR-V',
        done: true
    },
       {
        text:'Chocolate',
        done: false
    },
       {
        text:'A lot of Chocolate',
        done: true
    },
    {
        text:'A cook',
        done: false
    }
).map(todo => {

    return {
        ...todo,
        id: uuid.v4()   //tällä lisätään ID jokaiseen listan kohtaan
    };
});
