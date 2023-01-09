import React from 'react'
import {addTodo} from '../../store/actions/todo'
import { useDispatch } from 'react-redux';
import  {useState} from "react";



function Form() {
    const dispatch = useDispatch();
  

    function onFormSubmit(e) {
        e.preventDefault();
        dispatch(addTodo({title: e.target.title.value}));
   
        e.target.reset();
    }
  

    return (
        <form onSubmit={onFormSubmit}>
        <div className="row">
            <div className="ten columns">
                <input type="text" name="title" className="u-full-width" />
            </div>
            <div className="two columns">
                <input type="submit" id="submitBtn" value="Add" />
            </div>
        </div>
    </form>
    )
}
export default Form