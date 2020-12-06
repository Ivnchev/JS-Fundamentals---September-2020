function foo(array) {
    let obj = {};
    let neighborhoods = array.shift().split(', ').forEach(x => { obj[x] = [] })
    array.forEach(x => {
        let [neighborhood, person] = x.split(' - ');
        if(obj[neighborhood]){
            obj[neighborhood].push(person);
        }
    });
    let sorted = Object.entries(obj).sort((a,b) => b[1].length - a[1].length)
    sorted.forEach(kvp => {
        console.log(`${kvp[0]}: ${kvp[1].length}`);
        kvp[1].forEach(x => { console.log(`--${x}`) })
    })
}

foo(['Abbey Street, Herald Street, Bright Mews',
    'Bright Mews - Garry',
    'Bright Mews - Andrea',
    'Invalid Street - Tommy',
    'Abbey Street - Billy']);