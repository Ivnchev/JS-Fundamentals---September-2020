function foo(input) {
    let person = {}
    input.forEach(x => {
        let personalNum = x.length;
        person[x] = personalNum
        console.log(`Name: ${x} -- Personal Number: ${personalNum}`);
    });
}

foo([ 'Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal' ]);

