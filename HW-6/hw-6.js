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
let globalAvarageMarks = calculateGroupAverageMark(students);
let allMarks = getAllMarks(students[0],students[1],students[2],students[3])
// let overalMark = calculateGroupAverageMark(allMarks);
// console.log('average mark all students:', overalMark)

// one student
 function calculateStudentAverageMark (studentsMark){
   return studentsMark.marks.reduce((sum, current) => sum + current,0)/studentMarkLenght(students);
 }
 function studentMarkLenght(students){
     let studentArr = students.find(item => item.id == 12);
     return studentArr.marks.length
 }
 

// all students
function getAllMarks(val1, val2, val3, val4) {
    val1 = val1.marks.reduce((sum, current) => sum + current,0);
    val2 = val2.marks.reduce((sum, current) => sum + current,0);
    val3 = val3.marks.reduce((sum, current) => sum + current,0);
    val4 = val4.marks.reduce((sum, current) => sum + current,0);
  return val1+val2+val3+val4;
}

// function calculateGroupAverageMark(allMarks) {
//   return result = allMarks/19
//  }

function calculateGroupAverageMark(students) { 
    let map = new Map(Object.entries(students));

    console.log(map.get('marks'));
}




