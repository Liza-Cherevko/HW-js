
import './App.css';
import react, { Component } from 'react';
import Head from '../Head/Head';
import List from '../List/List';
import AddContact from '../AddContact/AddContact';


class App extends Component {
  state ={
    contacts:[
       { id:1, name: 'Name 1 ', surname: 'Surname 1', phone:'546456456645'},
      { id:2, name: 'Name 2 ', surname: 'Surname 2', phone:'345546465466' },
      { id:3, name: 'Name 3 ', surname: 'Surname 3', phone:'456464646656' },
    ]
  };


  createContact = (newContact) => {
    this.setState({
      contacts: [
            ...this.state.contacts,
            {
                ...newContact,
                id: Date.now(),
            },
        ],
    });
};




  deleteContact = (id) => {
    this.setState({
      contacts: this.state.contacts.filter((item) => item.id !== id),
  });
}
  render(){
    return(
      <>
                 <table >
                <Head/>
                <List 
                 contacts={this.state.contacts}
                 onDelete={this.deleteContact}
                />
                <AddContact onSave={this.createContact}/>
       
            </table>
      
      </>
    )
  }
 }

export default App;
