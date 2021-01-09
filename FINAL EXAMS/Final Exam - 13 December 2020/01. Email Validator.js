function foo(input) {
    let str = input.shift();
    let list = {
        'Make': (a) => { return a === 'Upper' ? str = str.toUpperCase() : str = str.toLowerCase() },
        'GetDomain': (a) => { return str.substring(str.length - a) },
        'GetUsername': () => { if(str.includes('@')){ return str.substring(0, str.indexOf('@')) }
        return `The email ${str} doesn't contain the @ symbol.`
        },
        'Replace': (a) => { while(str.includes(a)) { str = str.replace(a, '-') } return str},
        'Encrypt': () => { return str = str.split('').map(x => x.charCodeAt()).join(' ') },   
    }
    input.slice(0, input.indexOf('Complete')).forEach(x => {
        let [cmd, a] =x.split(' ')
        console.log( list[cmd](a) )
    });
}

foo([
    'Mike123@somemail.com',
    'Make Upper',
    'GetDomain 3',
    'GetUsername',
    'Encrypt',
    'Complete']);