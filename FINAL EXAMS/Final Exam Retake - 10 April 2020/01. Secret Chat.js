function foo(input) {
    let str= input.shift()
    let list = {
        'InsertSpace': (a) => str = str.substring(0, a) + ' ' + str.substring(a),
        'Reverse': (a) => {
            if(str.includes(a)){ return str = str.replace(a, '') + a.split('').reverse().join('')} 
            else { return 'error' }
        },
        'ChangeAll': (a,b) => str = str.replace(new RegExp(a, 'g'), b),
    }
    input.slice(0, input.indexOf('Reveal')).forEach(x => {
        let [cmd, a, b] = x.split(':|:').map(x => isNaN(x) ? x : Number(x))
        console.log(list[cmd](a,b));
    });
    console.log(`You have a new text message: ${str}`);
}

foo([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
  ]);



  // SYSTEM REGISTER ОТ ОБЕКТИ 
//   function foo(arr) {
//     let result = arr.reduce((a, v) => {
//         const [system, component, subC] = v.split(" | ")
//         if (!a.has(system)) {
//             a.set(system, new Map())
//         }
//         if (!a.get(system).has(component)) {
//             a.get(system).set(component, [])
//         }
//         a.get(system).get(component).push(subC)
//         return a
//     }, new Map())

//     result = [...result.entries()].sort((x, y) => {
//         return y[1].size - x[1].size !== 0 ? y[1].size - x[1].size : x[0].toLowerCase().localeCompare(y[0].toLowerCase())
//     })
//     result = result.map(x => [x[0], [...x[1].entries()].sort((x, y) => y[1].length - x[1].length)])
//     result.forEach(x => {
//         console.log(`${x[0]}`)
//         x[1].forEach(x1 => {
//             console.log(`|||${x1[0]}`)
//             x1[1].forEach(x2 => console.log(`||||||${x2}`))
//         })
//     })
// }

// function system(input) {
//     let reg = {}
//     for (item of input) {
//         let [sys, comp, sub] = item.split(' | ')
//         if (reg[sys]) reg[sys][comp] ? reg[sys][comp].push(sub) : reg[sys][comp] = [sub]
//         else reg[sys] = { [comp]: [sub] }
//     }

//     Object.entries(reg).sort((a, b) => {
//        return Object.keys(b[1]).length - Object.keys(a[1]).length || a[0].localeCompare(b[0])
//     }).forEach(x => {
//         console.log(x[0])
//         Object.entries(x[1]).sort((a, b) => b[1].length - a[1].length).forEach(y => {
//             console.log(`|||${y[0]}`)
//             y[1].forEach(z => console.log(`||||||${z}`))
//         })
//     })
// }