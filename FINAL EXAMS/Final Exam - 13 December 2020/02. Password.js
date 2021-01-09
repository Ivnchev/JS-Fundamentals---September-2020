function foo(input) {
    
    input.slice(0, input.shift()).forEach(x => {
        let p = x.match(/^(.+)>(?<n>\d{3})\|(?<lw>[a-z]{3})\|(?<u>[A-Z]{3})\|(?<s>[^<>]{3})<\1$/)
        if(p){
            console.log(`Password: ${p.groups.n}${p.groups.lw}${p.groups.u}${p.groups.s}`);
        }else { console.log('Try another password!');}
    });
}

foo([
    '3',
    '##>00|no|NO|!!!?<###',
    '##>123|yes|YES|!!!<##',
    '$$<111|noo|NOPE|<<>$$'
  ])
foo([
    '5',
    'aa>111|mqu|BAU|mqu<aa',
    '()>111!aaa!AAA!^&*<()',
    'o>088|abc|AAA|***<o',
    'asd>asd|asd|ASD|asd<asd',
    '*>088|zzzz|ZzZ|123<*'
  ])