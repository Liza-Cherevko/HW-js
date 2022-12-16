import './App.css';
import '../../common-css/css/normalize.css';
import '../../common-css/css/skeleton.css';
import '../../common-css/css/dark-theme.css';
import Header from '../ContactHeader/ContactHeader';
import { useEffect, useState } from 'react';
import ContactList from '../ContactList/ContactList';
import { getContacts } from '../../services/services';
import ContactForm from '../ContactForm/ContactForm';

function App() {
  const [contacts, setContacts] = useState([])

 useEffect(()=>{
  getContacts().then(setContacts)
},[])
  
  return (
    <div className="container">
      <Header />
      <ContactList contacts={contacts} />
      <ContactForm/>
      
    </div>
  );
}

export default App;
