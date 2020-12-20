function foo(input) {
    let str = input.shift()
    let list = {
        'Contains': (a) => { return str.includes(a) ? `${str} contains ${a}`: `Substring not found!` },
        'Flip': (a,b,c) => { return a === 'Upper' 
                            ? str = str.slice(0,b) + str.slice(b,c).toUpperCase() + str.slice(c) 
                            : str = str.slice(0,b) + str.slice(b,c).toLowerCase() + str.slice(c)
        },
        'Slice': (a,b) => { return str = str.substring(0,a) + str.substring(b)},
    }
    input.slice(0,input.indexOf('Generate')).forEach(x => {
        let [ cmd, a, b, c] = x.split('>>>').map( x => isNaN(x) ? x : Number(x))
        console.log( list[cmd](a,b,c) )
    });
    console.log(`Your activation key is: ${str}`);
}

foo(['abcdefghijklmnopqrstuvwxyz',
    'Slice>>>2>>>6',
    'Flip>>>Upper>>>3>>>14',
    'Flip>>>Lower>>>5>>>7',
    'Contains>>>def',
    'Contains>>>deF',
    'Generate']);
foo(['134softsf5ftuni2020rockz42',
    'Slice>>>3>>>7',
    'Contains>>>-rock',
    'Contains>>>-uni-',
    'Contains>>>-rocks',
    'Flip>>>Upper>>>2>>>8',
    'Flip>>>Lower>>>5>>>11',
    'Generate'])