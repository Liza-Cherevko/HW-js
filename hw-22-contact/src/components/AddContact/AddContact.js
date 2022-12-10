import React, {Component} from "react";

export default class AddContact extends Component {
  onAddContact=(e)=>{
    e.preventDefault();
    this.props.onSave({
        name: e.target.elements.ContactName.value,
        surname: e.target.elements.ContactSurname.value,
        phone: e.target.elements.ContactPhone.value
    });

    e.target.reset();
  }


    render() {
        return(         
     <tfoot >
   <tr>
       <td>
           <input type="hidden" id="id" value="" name="id"/>
           <input name="ContactName"type="text" placeholder="Contact name" />
        </td>
       <td>
           <input name="ContactSurname"type="text" placeholder="Contact surname" />
       </td>
       <td>
           <input name="ContactPhone"type="text"placeholder="Contact phone"/>
       </td>
       <td><button onClick={this.onAddContact} >Save</button></td>
      
   </tr>
</tfoot>



// <form>
// <input type="hidden" id="id" value="" />
// <input name="ContactName" type="text"  placeholder="Contact name"/>
// <input name="ContactSurname" type="text" placeholder="Contact surname" />
// <input name="ContactPhone" type="number" placeholder="Contact phone" />
// </form>

)
    }
}