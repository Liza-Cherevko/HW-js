// calculateStudentAverageMark - выведет средний бал студента, который передан в аргументе

// calculateGroupAverageMark - выведет средний бал по всем студентам, переданным в аргументе



const students = [
    {
        id:10,
        name: 'John Smith',
        marks: [10, 8, 6, 9, 8, 7 ]
    },
    {
        id:11,
        name: 'John Doe',
        marks: [ 9, 8, 7, 6, 7 ]
    },
    {
        id:12,
        name: 'Thomas Anderson',
        marks: [6, 7, 10, 8 ]
    },
    {
        id:13,
        name: 'Jean-Baptiste Emanuel Zorg',
        marks: [10, 9, 8, 9 ]
    }
]

let marks = calculateStudentAverageMark (students[2]);
console.log('average mark one student:', marks)
let allMarks = getAllMarks(students)
let globalAvarageMarks = calculateGroupAverageMark();

console.log('average all mark one student:', globalAvarageMarks)

// one student
 function calculateStudentAverageMark (studentsMark){
   return studentsMark.marks.reduce((sum, current) => sum + current,0)/studentMarkLenght(students);
 }
 function studentMarkLenght(students){
     let studentArr = students.find(item => item.id == 12);
     return studentArr.marks.length
 }

    function getAllMarks(students) {
        return students.map(el => el.marks).flat(Infinity);
    //    return allMarksArr.reduce((sum, current) => sum + current).split(',').map(Number);
     
     }
function calculateGroupAverageMark() { 
    return allMarks.reduce((total, amount) => total + amount)/allMarks.length
}
 




















