function foo(input) {
    let str = input.shift()
    let commands = {
        'Add Stop': (a,b) =>{
            if(str[a] !== undefined) { str = str.substring(0, a) + b + str.substring(a)}
            return str
        },
        'Remove Stop': (a,b) =>{
            if(str[a] !== undefined && str[b] !== undefined){
                str = str.substring(0, a) + str.substring(b + 1)
            }
            return str
        },
        'Switch': (a,b) =>{
            let x = new RegExp(a, 'g')
            str = str.replace(x, b)
            return str
        },
    }
    input.slice(0, input.indexOf('Travel')).forEach(x => {
        let [cmd, a, b] = x.split(':').map(x => isNaN(x) ? x : Number(x))
        console.log(commands[cmd](a,b))
    });
    console.log(`Ready for world tour! Planned stops: ${str}`);
}

foo(['Hawai::Cyprys-Greece',
    'Add Stop:7:Rome',
    'Remove Stop:11:16',
    'Switch:Hawai:Bulgaria',
    'Travel'])