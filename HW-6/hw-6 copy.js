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

console.log('average all mark one student:', calculateStudentAverageMark(students[2]))
console.log('average all mark for group:', calculateGroupAverageMark())

// one student
function calculateStudentAverageMark({ marks }) {
    if (!marks.length) return 0;
   return marks.reduce((sum, current) => sum + current, 0)/marks.length;
}
 
function calculateGroupAverageMark() { 
    return students.reduce((sum, student) => sum + calculateStudentAverageMark(student), 0)
}
 




















