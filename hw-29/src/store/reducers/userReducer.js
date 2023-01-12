/* eslint-disable import/no-anonymous-default-export */

import { ADD_USER, DELETE_USER, SET_USER } from "../actions/user"

const INITIAL_STATE = {
    filters: {},
    name: 'Alex',
    list: [
        { id: 1, name: 'title 1', surname: 'title 1', email: 'fsfs@gmail.com' },
        { id: 2, name: 'title 2', surname: 'title 2', email: 'fsfs@gmail.com' },
        { id: 3, name: 'title 3', surname: 'title 3', email: 'fsfs@gmail.com' },
        { id: 4, name: 'title 4', surname:'title 4', email: 'fsfs@gmail.com' },
    ]
}




export default function userReducer (state = INITIAL_STATE, { type, payload }) {

    switch (type) {
      
        case DELETE_USER:
            return {
                ...state,
                list: state.list.filter((item) => payload !== item.id),
            };
        
        case ADD_USER: return {
            ...state,
            list: [...state.list, { id: Date.now(), ...payload }]
        }; 
        case SET_USER:
            return {
                ...state,
                list:payload
            }






default : return state
    }
}

