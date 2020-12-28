function foo(z) {
    let n = Number(z.shift())
    let obj = {}
    let list = {
        'Add': (piece, composer, key) => {
            if(obj[piece] === undefined){ obj[piece] = { composer, key } ; console.log(`${piece} by ${composer} in ${key} added to the collection!`);}
            else { console.log(`${piece} is already in the collection!`); }
        },
        'Remove': (piece) => {
            if(obj[piece] !== undefined) { delete obj[piece]; console.log(`Successfully removed ${piece}!`); }
            else { console.log(`Invalid operation! ${piece} does not exist in the collection.`); }
        },
        'ChangeKey': (piece, key) => {
            if(obj[piece] !== undefined) { obj[piece].key = key; console.log(`Changed the key of ${piece} to ${key}!`); }
            else { console.log(`Invalid operation! ${piece} does not exist in the collection.`);}
        },
    }

    z.slice(0,n).forEach(x => {
        let [ piece, composer, key ] = x.split('|')
        if(obj[piece] === undefined) { obj[piece] = {} }
        obj[piece] = { composer, key }
    });

    z.slice(n, z.indexOf('Stop')).forEach(x => {
        let [ cmd, a, b, c] = x.split('|')
        list[cmd](a,b,c)
    });

    Object.entries(obj).sort( (a,b) => a[0].localeCompare(b[0]) || a[1].composer.localeCompare(b[1].composer) )
        .forEach(x => { console.log(`${x[0]} -> Composer: ${x[1].composer}, Key: ${x[1].key}`); });
}

foo(['3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'])
foo(['4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'])