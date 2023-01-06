import React from 'react'
import { useDispatch } from 'react-redux';
import saveTodo from '../../store/reducers/todoReducer'
function Form({ todo }) {

    
    // function onFormSubmit(e) {
    //     e.preventDefault();

    //     onSave({
    //         title: e.target.title.value,
    //     });

    //     e.target.reset();
    // }
    const dispatch =  useDispatch();
    function onSave() { 
        dispatch(saveTodo(todo.id))
    }

  return (
    <form onSubmit={onSave}>
    <div className="row">
        <div className="ten columns">
            <input
                type="text"
                className="u-full-width"
            />
        </div>
        <div className="two columns">
            <input type="submit" value="Add" />
        </div>
    </div>
</form>
  )
}

export default Form