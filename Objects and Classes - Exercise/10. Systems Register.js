function foo(input) {
    let obj = {}
    input.forEach(x => {
        let [system, comp , sub] = x.split(' | ')
        if(obj[system] === undefined) { obj[system] = {}; }
        if (obj[system][comp] === undefined){ obj[system][comp] = [] }
        obj[system][comp].push(sub)
    });
let sorted = Object.entries(obj).sort((a,b) => Object.keys(b[1]).length - Object.keys(a[1]).length || a[0].localeCompare(b[0]) )
    sorted.forEach(x => {
        console.log(x[0])
        let second = Object.entries(x[1]).sort((a,b) => b[1].length - a[1].length)
        
            second.forEach(z => {
                    console.log(`|||${z[0]}`);
                    z[1].forEach(v => {
                        console.log(`||||||${v}`);
                    })
                })
    })
}

foo([
    'SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security']);