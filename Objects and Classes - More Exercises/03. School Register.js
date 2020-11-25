function foo(input) {
    const listOfStudents = {};
    input.forEach(x => {
        const [student, grade, score] = x.split(', ');
        const name = student.split(': ')[1];
        const stGrade = Number(grade.split(': ')[1]) + 1;
        const studentScore = Number(score.split(': ')[1]);
        if(studentScore > 3){
            const currentStudent = {name, studentScore};
            if(!listOfStudents.hasOwnProperty(stGrade)){
                listOfStudents[stGrade] = [];
            }
            listOfStudents[stGrade].push(currentStudent);
        }
    });
    function averageScore(input) {
        return input.reduce((a,b) => a + b, 0) / input.length;
    }
    const sortingGrades = Object.keys(listOfStudents).sort((a,b) => a - b);
    for (const i of sortingGrades) {
        let students = listOfStudents[i];
        console.log(`${i} Grade`);
        console.log(`List of students: ${students.map(x => x.name).join(', ')}`);
        console.log(`Average annual grade from last year: ${averageScore(students.map(x => x.studentScore)).toFixed(2)}`);
        console.log();
    }

}

foo(
["Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
"Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
"Student name: George, Grade: 8, Graduated with an average score: 2.83",
"Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
"Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
"Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
"Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
"Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
"Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
"Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
"Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
"Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"]
);
