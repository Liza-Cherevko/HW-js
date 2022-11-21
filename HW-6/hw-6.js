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

// let marks = calculateStudentAverageMark (students[1]);
// console.log('average mark one student:', marks)
// let allMarks = getAllMarks(students)
// let globalAvarageMarks = calculateGroupAverageMark(students);

// console.log('average all mark one student:', globalAvarageMarks)


console.log('average all mark one student:', calculateStudentAverageMark(students[1]))
console.log('average all mark all student:', calculateGroupAverageMark(students))

function calculateStudentAverageMark({marks}){ 
    return marks.reduce((acc, mark)=>acc+mark)/marks.length
}
 
function calculateGroupAverageMark(students){ 
  return students.reduce((acc, student)=>acc+ calculateStudentAverageMark(student),0 )
}

























