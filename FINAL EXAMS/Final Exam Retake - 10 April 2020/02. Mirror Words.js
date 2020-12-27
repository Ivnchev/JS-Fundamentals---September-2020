function foo(input) {
    let p = input[0].match(/([@#])([A-Za-z]{3,})\1\1([A-Za-z]{3,})\1/g)
    let r = []
    if(p) {
        p = p.map( x => x.split(/[@#]/g).filter( x => x != ''))
        p.forEach(x => { if(x[0] === x[1].split('').reverse().join('')){ r.push(`${x[0]} <=> ${x[1]}`) } });
    }
    if(p === null){ console.log('No word pairs found!'); }
    else { console.log(`${p.length} word pairs found!`); }
    if(r.length > 0){ console.log(`The mirror words are:\n${r.join(', ')}`); }
    else { console.log('No mirror words!'); }
}

foo(['@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'])
foo(['#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@'])
foo(['#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#'])