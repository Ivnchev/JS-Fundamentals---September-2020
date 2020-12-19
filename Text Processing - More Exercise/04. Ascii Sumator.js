function foo(input) {
    let a = Number(input[0].charCodeAt())
    let b = Number(input[1].charCodeAt())
    let str = input[2].split('').map(x => Number( x.charCodeAt() ) )             
            .filter(x => x > Number( Math.min(a,b) ) && x < Number( Math.max(a,b) ) )
                .reduce((i,e) => i + e, 0)
    console.log(str);
}

foo([ '.', '@', 'dsg12gr5653feee5' ])
foo([ '?', 'E', '@ABCEF' ])
foo([ 'a', '1', 'jfe392$#@j24ui9ne#@$'])