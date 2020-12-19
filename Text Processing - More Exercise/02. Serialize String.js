function foo(input) {
    let obj = new Map()
    input[0].split('').forEach((x,i) => {
        if(!obj.has(x)){ obj.set(x, [])}
        obj.get(x).push(i)
    });
    Array.from(obj).forEach(x => { console.log(`${x[0]}:${x[1].join('/')}`); })
}

foo([ 'abababa', '' ])
foo([ 'avjavamsdmcalsdm', '' ])