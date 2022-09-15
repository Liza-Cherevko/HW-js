// calculateStudentAverageMark - выведет средний бал студента, который передан в аргументе

// calculateGroupAverageMark - выведет средний бал по всем студентам, переданным в аргументе

// препод версия

const students = [
    { id:10, name: 'John Smith', marks: [10, 8, 6, 9, 8, 7 ] },
    { id:11, name: 'John Doe', marks: [ 9, 8, 7, 6, 7 ] },
    { id:12, name: 'Thomas Anderson', marks: [6, 7, 10, 8 ] },
    { id:13,name: 'Jean-Baptiste Emanuel Zorg', marks: [10, 9, 8, 9 ] }
]

console.log('average all mark one student:', getStudentAvaregeMark(students[2]))
console.log('average all mark all student:', getGroupAvaregeMark(students))

function getStudentAvaregeMark({ marks }) { 
    // let sum = 0;
    // marks.forEach((mark) => (sum += mark));
 return getAvarage(marks)
}

function getGroupAvaregeMark(students) { 
    // let allMarks = [];
    // students.forEach(({marks})=> (allMarks = allMarks.concat(marks)));
    // let allMarks = students.reduce((acc, { marks})=> acc.concat(marks),[])
    let allMarks = students.flatMap(({marks}) => marks)
    return getAvarage(allMarks)
    }


function getAvarage(arr) { 
    let sum = arr.reduce((acc, mark)=> acc + mark)
    return sum/arr.length
}
    















