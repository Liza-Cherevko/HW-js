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
let allMarks = getAllMarks(students[0],students[1],students[2],students[3])
let overalMark = calculateGroupAverageMark(students);

 function calculateStudentAverageMark (studentsMark){
    // let studentArr = students.find(item => item.id == 12);
    return studentsMark.marks.reduce((sum, current) => sum + current,0)/ 4
 }
 
function getAllMarks(val1,val2,val3,val4){
    val1 = val1.marks.reduce((sum, current) => sum + current,0);
    val2 = val2.marks.reduce((sum, current) => sum + current,0);
    val3 = val3.marks.reduce((sum, current) => sum + current,0);
    val4 = val4.marks.reduce((sum, current) => sum + current,0);
  return val1+val2+val3+val4;
}

 function calculateGroupAverageMark(students){
  return result = allMarks/19
 }





// function calculateStudentAverageMark(students) {

// }
// function calculateGroupAverageMark(students) { 

// }