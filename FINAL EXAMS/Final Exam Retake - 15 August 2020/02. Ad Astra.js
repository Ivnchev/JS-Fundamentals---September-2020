function foo(z) {
    let p = z[0].match(/([\|#])([A-Za-z\s]+)\1([\d]{2}\/[\d]{2}\/[\d]{2})\1([\d]+)\1/g)
    let c= 0;
    if(p){
        p = p.map( x=> x.split(/[\|#]/g).filter(x => x !== '').map(x => isNaN(x) ? x : Number(x)))
        c = Math.floor(p.reduce( (a,b) => a + b[2],0) / 2000)
    } else { p = []}
    console.log(`You have food to last you for: ${c} days!`);
    if(p.length > 0 ){ console.log(`${p.map(x => `Item: ${x[0]}, Best before: ${x[1]}, Nutrition: ${x[2]}`).join('\n')}`); }
}

foo(['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'])
foo(['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|' ])
foo(['Hello|#Invalid food#19/03/20#450|$5*(@' ])