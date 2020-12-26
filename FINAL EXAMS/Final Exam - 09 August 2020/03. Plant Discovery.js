function foo(input) {
    let n = input.shift()
    let obj = {}
    let list = {
        'Rate': (plant, rating) => { obj[plant].rating.push(rating)},
        'Update': (plant, rarity) => { obj[plant].rarity = rarity },
        'Reset': (plant) => { obj[plant].rating = [] },
    }
    input.slice(0,n).forEach(x => {
        let [a,rarity] = x.split('<->').map(x => isNaN(x) ? x : Number(x))
        if(obj[a] === undefined){ obj[a] = {}}
        obj[a] = {rarity: rarity, rating: []}
    });
    input.slice(n, input.indexOf('Exhibition')).forEach(x => {
        let [cmd, z] = x.split(': ')
        let [a,b] = z.split(' - ').map(x => isNaN(x) ? x : Number(x))
        if(cmd === undefined || obj[a] === undefined ){ console.log('error'); }
        else { list[cmd](a,b) }
    });

    Object.entries(obj).forEach(x => {
        if(x[1].rating.length > 0 ){ x[1].rating = x[1].rating.reduce( (a,b) => a + b, 0) / x[1].rating.length }
        else { x[1].rating = 0 }
    });
    console.log('Plants for the exhibition:');
    Object.entries(obj).sort( (a,b) => b[1].rarity - a[1].rarity || b[1].rating - a[1].rating)
        .forEach(x => { console.log(`- ${x[0]}; Rarity: ${x[1].rarity}; Rating: ${x[1].rating.toFixed(2)}`); });
}

foo(['3',
    'Arnoldii<->4',
    'Woodii<->7',
    'Welwitschia<->2',
    'Rate: Woodii - 10',
    'Rate: Welwitschia - 7',
    'Rate: Arnoldii - 3',
    'Rate: Woodii - 5',
    'Update: Woodii - 5',
    'Reset: Arnoldii',
    'Exhibition'])