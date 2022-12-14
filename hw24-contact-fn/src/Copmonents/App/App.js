import './App.css';
import '../../common-css/css/normalize.css';
import '../../common-css/css/skeleton.css';
import '../../common-css/css/dark-theme.css';
import Header from '../ContactHeader/ContactHeader';
import { useEffect, useState } from 'react';
import ContactList from '../ContactList/ContactList';
import { createItem, getContacts, removeContact } from '../../services/services';
import ContactForm from '../ContactForm/ContactForm';


function App() {
  const [contacts, setContacts] = useState([])

 useEffect(()=>{
  getContacts().then(setContacts)
 }, [])
  
  function deleteContact(id) { 
    removeContact(id).then(() => {
      setContacts(contacts.filter((item) => item.id !== id));
  });
  }
  function saveContact(newContact) { 
    createItem({...newContact}).then((data) =>
    setContacts([...contacts, data])
);
  }
  return (
    <div className="container">
      <Header />
      <ContactList contacts={contacts} onDelete={ deleteContact} />
      <ContactForm onSave={saveContact} />
      
    </div>
  );
}

export default App;
