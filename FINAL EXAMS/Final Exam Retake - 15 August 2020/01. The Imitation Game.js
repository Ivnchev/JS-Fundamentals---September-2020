function foo(z) {
    let str = z.shift()
    let list = {
        'ChangeAll': (a,b) => { while(str.includes(a)){ str = str.replace(a,b) } },
        'Insert': (a,b) => { str = str.substring(0, a) + b + str.substring(a) },
        'Move': (a) => { str = str.substring(a) + str.substring(0,a) },
    }
    z.slice(0, z.indexOf('Decode')).forEach(x => {
        let [cmd, a, b] = x.split('|')
        list[cmd](a,b)
    });
    console.log(`The decrypted message is: ${str}`);
}

foo([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode'
  ]);