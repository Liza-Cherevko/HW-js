// const _User ={
//     firstName: '',
//     lastName: '',
//     mob:'',
//     dob:'',
//     yob:'',

//    setName: function ( name ){
//     const nameRow= name.split(' ')
//     this.firstName = nameRow[0]
//     this.lastName = nameRow[1]
//    },

//    getName:function(){
//        return `${this.firstName} ${this.lastName}` 
//    },

// //    getAge:function{

// //    },
// };
// const registureUser ={...User}
// registureUser.setName('Liza Liza')
// console.log(registureUser)

class User {
    constructor(props){
     this.name = props.name;
     this.dateOfBirth = props.dob

    }
   firstName='';
   lastName='';
   dob = '';
   mob='';
   yob='';

   set name(newName){
    const nameRow = newName.split(' ');
    this.firstName = nameRow[0],
    this.lastName = nameRow[1]

   }
   get name(){
    return `${this.firstName} ${this.lastName}`
   }
    get age(){
    return new Date().getFullYear() - this.yob;
    }
    set dateOfBirth(date){
        console.log(date)
       const dateRow = date.split('-')
       this.dob = Number(dateRow[0])
       this.mob = Number(dateRow[1])
       this.yob = Number(dateRow[2])
        }
        get dateOfBirth(){
return `${this.dob} ${this.mob} ${this.yob}`
        }
}

  
const Liza = new User({
    name: 'Liza Cherevko',
    dob:'02-05-2000'
})



console.log(Liza)

