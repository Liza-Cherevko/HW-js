/* eslint-disable import/no-anonymous-default-export */


const INITIAL_STATE = {
    filters: {},
    name: 'Alex',
    list: [
    { id: 1, title: 'Item 1', isDone: false },
    { id: 2, title: 'Item 2', isDone: true },
    { id: 3, title: 'Item 3', isDone: true },
    { id: 4, title: 'Item 4', isDone: false },
    ]
}




export default function (state = INITIAL_STATE, { type, payload }) { 
   
    switch (type) { 
        default: return state;
    }
}