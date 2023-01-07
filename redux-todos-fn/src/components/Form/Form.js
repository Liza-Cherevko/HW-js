import React from 'react'
import {addTodo} from '../../store/actions/todo'
import { useDispatch } from 'react-redux';
import  {useState} from "react";

// function Form({ todo }) {

    
//     function onFormSubmit(e) {
//         e.preventDefault();

//         onSave({
//             title: e.target.title.value,
//         });

//         e.target.reset();
//     }
//     const dispatch =  useDispatch();
//     function onSave() { 
//         dispatch(saveTodo(todo.id))
//     }

//   return (
//     <form onSubmit={onSave}>
//     <div className="row">
//         <div className="ten columns">
//             <input
//                 type="text"
//                 className="u-full-width"
//             />
//         </div>
//         <div className="two columns">
//             <input type="submit" value="Add" />
//         </div>
//     </div>
// </form>
//   )
// }

function Form() {
    const dispatch = useDispatch();
    const [value, setValue] = useState('');

    function onFormSubmit(e) {
        e.preventDefault();
        dispatch(addTodo(value));
        setValue('');
        e.target.reset();
    }
    function handleInput (e){
        setValue(e.target.value);
    }

    return (
        <form onSubmit={onFormSubmit}>
   <div className="list">
                <div className="input-container">
                    <input type="text" className="u-full-width" name="title" value={value} onChange={handleInput}/>
                </div>
                <div className="btn-container">
                    <input type="submit" className="u-full-width" value="Add"/>
                </div>
            </div>
        </form>
    )
}
export default Form