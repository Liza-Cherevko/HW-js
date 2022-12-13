import React, {Component} from "react";
import  './List.css'
import ListItem from "../ListItem/ListItem";

export default class List extends Component{
    render(){
        
        return(
            // <tbody >
            //     {
            //         this.props.contacts.map((item)=>(
            //         <ListItem  
            //         key={item.id}
            //         contacts={item}
            //       onDelete={this.props.onDelete}
            //         />))
            //     }
            // </tbody>      
               <div className="wrap-block">
                      {
                    this.props.contacts.map((item)=>(
                    <ListItem  
                    key={item.id}
                    contacts={item}
                  onDelete={this.props.onDelete}
                    />))
                }
               </div>
        
        )
    }
}