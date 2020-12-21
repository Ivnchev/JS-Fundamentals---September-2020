function foo(input) {
    let str = input.shift()
    let list = {
        TakeOdd(){ return str = str.split('').filter( (x,i) => i % 2 === 1 ).join('') },
        Cut(a,b){ return str = str.substring(0,a) + str.substring(a + b) },
        Substitute(a,b){ return str.includes(a) ? str = str.replace(new RegExp(a, 'g'), b) : 'Nothing to replace!' },
    }
    input.slice(0, input.indexOf('Done')).forEach(x => {
        let [cmd, a,b] = x.split(' ').map( x => isNaN(x) ? x : Number(x))
        console.log( list[cmd](a,b) )
    });
    console.log(`Your password is: ${str}`);
}

foo(['Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr ',
    'TakeOdd',
    'Cut 15 3',
    'Substitute :: -',
    'Substitute | ^',
    'Done'])
foo(['up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy',
    'TakeOdd',
    'Cut 18 2',
    'Substitute ! ***',
    'Substitute ? .!.',
    'Done'])