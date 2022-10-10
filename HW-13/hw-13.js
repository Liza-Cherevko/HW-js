

function Person(name) {
    this.name = name;
    this.sayHi = function () {
        console.log('hi', this.name)
    }
}

function Student(name) {
    this.name = name;
}

Student.prototype = new Person();
Student.prototype.study=function () {
    console.log('study', this.name)
}

const alex = new Student('Alex');
const bob = new Student('bob');


