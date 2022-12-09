import React, {Component} from "react";

export default class Form extends Component {
    render() {
        return(
            <form>
            <input name='newTodoName'/> 
            <button>Add</button>
          </form>
        )
    }
}