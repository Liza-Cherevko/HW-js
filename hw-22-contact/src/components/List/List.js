import React, {Component} from "react";
import ListItem from "../ListItem/ListItem";

export default class List extends Component{
    render(){
        
        return(
            <tbody >
                {
                    this.props.contacts.map((item)=>{
                        <ListItem
                    key={item.id}
                    contacts={item}
                />
                    })
                }
            </tbody>
        
        )
    }
}