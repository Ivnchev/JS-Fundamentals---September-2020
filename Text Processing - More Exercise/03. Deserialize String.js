function foo(input) {
    let obj = {}
    let r = []
    input.slice(0, input.indexOf('end')).forEach(x => {
        let [ a , b ] = x.split(':')
        b.split('/').forEach( y => {
            if(obj[y] === undefined) { obj[y] = a }
            obj[y] = a
        })
    });
    Object.entries(obj).forEach(x => r.push(x[1]) )
    return r.join('')
}
foo([ 'a:0/2/4/6', 'b:1/3/5', 'end' ])
foo(['a:0/3/5/11', 'v:1/4',
    'j:2',        'm:6/9/15',
    's:7/13',     'd:8/14',
    'c:10',       'l:12',
    'end'])