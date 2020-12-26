function foo(input) {
    let obj = {}
    let c = 0;
    let list = {
        'Like': (a,b) => {
            if(obj[a] === undefined) { obj[a] = []; obj[a].push(b) }
            else if(!obj[a].find(x => x === b)) { obj[a].push(b) }
        },
        'Unlike': (a,b) => {
            if(obj[a] === undefined) { console.log(`${a} is not at the party.`); }
            else {
                if( !obj[a].find(x => x === b) ) { console.log(`${a} doesn't have the ${b} in his/her collection.`); }
                else {
                    obj[a].splice(obj[a].indexOf(b),1)
                    c++
                    console.log(`${a} doesn't like the ${b}.`);
                }
            }
        },
    }
    input.slice(0, input.indexOf('Stop')).forEach(x => {
        let [cmd, a , b] = x.split('-')
        list[cmd](a,b)
    });  
    Object.entries(obj).sort( (a,b) => b[1].length - a[1].length || a[0].localeCompare(b[0]))
        .forEach(x => { console.log(`${x[0]}: ${x[1].join(', ')}`); });
    console.log(`Unliked meals: ${c}`);
}

foo([
    'Like-Krisi-shrimps',
    'Like-Krisi-soup',
    'Like-Misho-salad',
    'Like-Pena-dessert',
    'Stop'
])
foo([
    'Like-Krisi-shrimps',
    'Unlike-Vili-carp',
    'Unlike-Krisi-salad',
    'Unlike-Krisi-shrimps',
    'Stop'
])
// foo([
//     // 'Like-Mike-frenchFries',
//     // 'Like-Mike-salad',
//     // 'Like-George-fruit',
//     // 'Like-Steven-salad',
//     // 'Unlike-Steven-salad',
//     // 'Unlike-Steven-fruit',
//     // 'Stop'
// ])