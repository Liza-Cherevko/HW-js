import React, { Component } from 'react';

import ContactTableHeader from '../ContactTableHeader/ContactTableHeader';
import ContactTableList from '../ContactTableList/ContactTableList';

export class ContactTable extends Component {
    render() {
        return (
            <div>
                <ContactTableHeader />
                <ContactTableList
                    list={this.props.list}
                    onDelete={this.props.onDelete}
                />
            </div>
        );
    }
}

export default ContactTable;