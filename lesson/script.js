// const bodyElement = document.body;
// const childNodes = bodyElement.childNodes;

// let hmlElement = document.documentElement;
// let headElement = document.head;

// // получаем объект body
// let bodyElement = document.body;
// console.log(hmlElement);
// console.log(headElement);
// console.log(bodyElement);

// получаем первого и последнего ребенка 
// let firstChild = bodyElement.firstChild;
// let lastChild = bodyElement.lastChild;
// console.log(firstChild);
// console.log(lastChild)

// коллекция childNodes содержит список всех детей 
// const childNodes = bodyElement.childNodes;
// console.log(childNodes);
// console.log(bodyElement.hasChildNodes());

// перебор коллекции, покажет все узлы из коллекции 
// for (let node of childNodes){
//     console.log(node) 
// }

// let lists = document.querySelectorAll('.lesson-list');
// console.log(lists)
// let teg = document.querySelectorAll('li');
// console.log(teg)
// let txt = document.querySelectorAll('.lesson-text');
// console.log(txt)
let textElem = document.querySelector('.lesson__text');
let textElemContent = textElem.innerHTML;
console.log(textElemContent)
textElem.innerHTML = 'Какой-то новый текст'