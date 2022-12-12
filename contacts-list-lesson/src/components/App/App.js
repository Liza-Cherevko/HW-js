import React, {Component} from 'react';
import { createUser, deleteUser, getUsers } from '../../services/usersService';
import ContactForm from '../ContactForm/ContactForm';
import ContactTable from '../ContactTable/ContactTable';
import CurrentTime from '../CurrentTime/CurrentTime';

export class App extends Component{

state={
  list:[]
}
  deleteContact=(id)=>{
    deleteUser(id).then(()=>{
      this.setState({
        list: this.state.list.filter((item)=> item.id !==id),
      })
    })

  }

  createContact=(newContact)=>{
    createUser(newContact).then((data) => {
      this.setState({
          list: [...this.state.list, data],
      });
  });
}

toggleTimer = () => {
  this.setState({
      showTimer: !this.state.showTimer,
  });
};
  render(){
 return(
  <div className='container'>
    <CurrentTime/>
  <ContactTable list ={this.state.list} onDelete={this.deleteContact}/>
  <ContactForm onSave={this.createContact}/>
   </div>
 )
  }
  componentDidMount() {
    getUsers().then((data) =>
        this.setState({
            list: data,
        })
    );
}
}
export default App;


