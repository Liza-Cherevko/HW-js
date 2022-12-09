
import './App.css';
import react, { Component } from 'react';
import Head from '../Head/Head';
import List from '../List/List';
import AddContact from '../AddContact/AddContact';


class App extends Component {
  state ={
    contacts:[
      { id:1, name: 'Name 1 ', surname: 'Surname 1', email:'fsfk@gmail.com' },
      { id:2, name: 'Name 2 ', surname: 'Surname 2', email:'fsfk@gmail.com' },
      { id:3, name: 'Name 3 ', surname: 'Surname 3', email:'fsfk@gmail.com' },
    ]
  };
   
  render(){
    return(
      <>
                 <table >
                <Head/>
                <List 
                 contacts={this.state.contacts}
                />
                <AddContact/>
       
            </table>
      
      </>
    )
  }
 }

export default App;
