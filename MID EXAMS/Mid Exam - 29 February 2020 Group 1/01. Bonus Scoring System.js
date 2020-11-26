function foo(input) {
    const [students, lectures, bonus, ...attendances] = input.map(Number);
    let total = 0;
    let crntLectures = 0;
    attendances.forEach(x => {
        const result = Math.round(x / lectures * (5 + bonus))
        if(result > total){
            total = result;
            crntLectures = x;
        }
    })

    console.log(`Max Bonus: ${total}.`);
    console.log(`The student has attended ${crntLectures} lectures.`);
     
}

// foo([ '5', '25', '30', '12', '19', '24',  '16', '20' ]);
foo([ '10', '30', '14', '8', '23', '27', '28', '15', '17', '25', '26', '5', '18' ]);

