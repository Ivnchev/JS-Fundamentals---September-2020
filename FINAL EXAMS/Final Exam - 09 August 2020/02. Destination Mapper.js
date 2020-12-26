function foo(input) {
    let p = input.match(/([=\/])([A-Z][A-Za-z]{2,})\1/g)
    let c = 0;
    if(p){
        p = p.map( x=> x.split(/[=\/]/g).filter(x => x !== '').join(''))
        c = p.reduce( (a,b) => a + b.length, 0)
    } else { p = []}
    console.log(`Destinations: ${p.join(', ')}\nTravel Points: ${c}`);
}

foo('=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=')
foo('ThisIs some InvalidInput')

