function foo(input) {
    let nums = input.shift().split(' ').map(Number)
    let r = []
    input.slice( 0, input.indexOf('find') ).forEach(x => {
        let crntArr = []
        let i = 0;
        x.split('')
            .map(x => Number(x.charCodeAt()) )
            .forEach(z =>{
                if(i === nums.length){ i = 0 }
                crntArr.push(z - nums[i])
                i++
        })
        r.push(String.fromCharCode(...crntArr) )
    });
    r.forEach(x => {
        let m = /&(?<type>.*)&.*<(?<coordinate>.*)>/g.exec(x)
        console.log(`Found ${m.groups.type} at ${m.groups.coordinate}`);
    })
}
foo(['1 2 1 3',
    "ikegfp'jpne)bv=41P83X@",
    "ujfufKt)Tkmyft'duEprsfjqbvfv=53V55XA",
    'find'])
foo(['1 4 2 5 3 2 1',
    `Ulgwh"jt$ozfj!'kqqg(!bx"A3U237GC`,
    "tsojPqsf$(lrne'$CYfqpshksdvfT$>634O57YC",
    "'stj)>34W68Z@",
    'find'])
