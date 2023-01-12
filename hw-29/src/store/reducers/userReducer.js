/* eslint-disable import/no-anonymous-default-export */

import { ADD_USER, DELETE_USER, SET_USER } from "../actions/user"

const INITIAL_STATE = {
    filters: {},
    name: 'Alex',
    list: [
       
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

