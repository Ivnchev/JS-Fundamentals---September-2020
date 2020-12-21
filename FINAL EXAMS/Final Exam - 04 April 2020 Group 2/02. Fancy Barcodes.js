function foo(input) {
    input.splice(0, input.shift()).forEach(x => {
        let p  = x.match(/@[#]+([A-Z][A-Za-z0-9]{4,}[A-Z])@[#]+/g)
        let d = x.match(/\d/g)
        if(p){
            if(d){ console.log(`Product group: ${d.join('')}`); }
            else { console.log(`Product group: 00`); }
        }else { console.log('Invalid barcode'); }
    });
}

foo([ '3', '@#FreshFisH@#', '@###Brea0D@###', '@##Che46sE@##' ])
foo(['6',
    '@###Val1d1teM@###',
    '@#ValidIteM@#',
    '##InvaliDiteM##',
    '@InvalidIteM@',
    '@#Invalid_IteM@#',
    '@#ValiditeM@#'])