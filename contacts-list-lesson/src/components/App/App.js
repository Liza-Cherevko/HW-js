import React, {Component} from 'react';
import ContactForm from '../ContactForm/ContactForm';
import ContactTable from '../ContactTable/ContactTable';

export class App extends Component{

state={
  list:[{"name":"Vicki Wilderman","surname":"Dietrich","email":"Delbert.Hettinger47@yahoo.com","id":"3"},{"name":"Stuart Bode","surname":"Schamberger","email":"Lacy.Steuber46@gmail.com","id":"4"},{"name":"Mrs. Abel O'Conner","surname":"Kunze","email":"Oren_Schimmel@gmail.com","id":"5"},{"name":"Dr. Patricia Zieme","surname":"Boyle","email":"Ayla11@hotmail.com","id":"6"},{"name":"Sammy Rempel","surname":"Lowe","email":"Marilie.Labadie46@yahoo.com","id":"7"},{"name":"Mr. Douglas Kihn II","surname":"Graham","email":"Eliseo.Hudson@gmail.com","id":"8"},{"name":"Marilyn Pfannerstill","surname":"Kilback","email":"Lewis97@hotmail.com","id":"9"},{"name":"Dr. Trevor Sauer","surname":"Rice","email":"Arno.Schroeder63@gmail.com","id":"10"},{"name":"Joel Hansen","surname":"Mante","email":"Aiyana_Metz48@hotmail.com","id":"11"},{"name":"Cornelius Howell","surname":"Weissnat","email":"Maiya_Hirthe27@gmail.com","id":"12"},{"name":"Frederick Leffler","surname":"Dare","email":"Manley.Lehner56@gmail.com","id":"13"},{"name":"Flora Fay","surname":"Jenkins","email":"Alvera75@gmail.com","id":"14"},{"name":"Ted Jakubowski","surname":"Mayer","email":"Shany64@gmail.com","id":"15"},{"name":"12","surname":"123","email":"ss@ss.ss","id":"16"}]
}
  deleteContact=(id)=>{
this.setState({
  list: this.state.list.filter((item)=> item.id !==id),
})
  }




  render(){
 return(
  <div className='container'>
  <ContactTable list ={this.state.list} onDelete={this.deleteContact}/>
  <ContactForm/>
   </div>
 )
  }
}
export default App;


