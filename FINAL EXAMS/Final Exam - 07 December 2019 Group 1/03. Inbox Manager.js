function foo(input) {
    let str = input.shift()
    let list = {
        'Add Stop': (a,b) => { if(str[a] !== undefined){ str = str.substring(0,a) + b + str.substring(a) } return str},
        'Remove Stop': (a,b) => { if(str[a] !== undefined && str[b] !== undefined) { str = str.substring(0,a) + str.substring(b + 1) } return str},
        'Switch': (a,b) => { if(str.includes(a)) { str = str.replace( new RegExp(a, 'g'), b) } return str},
    }
    input.slice(0, input.indexOf('Travel')).forEach(x => {
        let [cmd, a, b] = x.split(':').map(x => isNaN(x) ? x : Number(x))
        console.log( list[cmd](a,b) )
    });
    console.log(`Ready for world tour! Planned stops: ${str}`);
}

// foo([
//     'Add->Annie',
//     'Add->George',
//     'Send->George->Hello World',
//     'Send->George->Some random test mail',
//     'Send->Annie->Hello, do you want to meet up tomorrow?',
//     'Send->George->It would be a pleasure',
//     'Send->Annie->Another random test mail',
//     'Delete->Annie',
//     'Delete->George',
//     'Statistics'
//   ]);

foo([
    'Add->Mike',
    'Add->George',
    'Send->George->Hello World',
    'Send->George->Some random test mail',
    'Send->Mike->Hello, do you want to meet up tomorrow?',
    'Send->George->It would be a pleasure',
    'Send->Mike->Another random test mail',
    'Statistics'
  ]);