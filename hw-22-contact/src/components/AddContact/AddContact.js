import React, {Component} from "react";

export default class AddContact extends Component {
    render() {
        return(
            <tfoot >
            <tr >
                <td>
                    <input type="hidden" id="id" value="" />
                    <input
                        type="text"
                        id="name"
                        placeholder="Contact name"
                    />
                </td>
                <td>
                    <input
                        type="text"
                        id="surname"
                        placeholder="Contact surname"
                    />
                </td>
                <td>
                    <input
                        type="text"
                        id="phone"
                        placeholder="Contact phone"
                    />
                </td>
                <td><button id="addContactBtn">Save</button></td>
            </tr>
        </tfoot>
        )
    }
}