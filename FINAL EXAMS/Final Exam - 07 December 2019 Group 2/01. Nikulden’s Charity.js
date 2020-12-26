function foo(input) {
    let str = input.shift()
    let list = {
        'Replace': (a,b) => { return str = str.replace(new RegExp(a, 'g'), b) },
        'Cut': (a,b) => { return str[a] !== undefined && str[b] !== undefined ? str = str.substring(0,a) + str.substring(b + 1) : `Invalid indexes!`},
        'Make': (a) => { return a === 'Upper' ? str = str.toUpperCase() : str = str.toLowerCase()},
        'Check': (a) => {return str.includes(a) ? `Message contains ${a}` : `Message doesn't contain ${a}`},
        'Sum': (a,b) => { return str[a] !== undefined && str[b] !== undefined
                            ? str.substring(a,b + 1).split('').map(x => x.charCodeAt()).reduce( (a,b) => a + b , 0)
                            : `Invalid indexes!`
        }
    }
    input.slice(0, input.indexOf('Finish')).forEach(x => {
        let [cmd, a, b] = x.split(' ').map( x => isNaN(x) ? x : Number(x))
        console.log( list[cmd](a,b) )
    });
}

// foo(['ILikeSharan',
//     'Replace a e',
//     'Make Upper',
//     'Check SHEREN',
//     'Sum 1 4',
//     'Cut 1 4',
//     'Finish']);
foo(['HappyNameDay',
    'Replace p r',
    'Make Lower',
    'Cut 2 23',
    'Sum -2 2',
    'Finish'])
foo(['DinnerIsServed',
    'Make Upper',
    'Check Dinner',
    'Replace N M',
    'Finish'])