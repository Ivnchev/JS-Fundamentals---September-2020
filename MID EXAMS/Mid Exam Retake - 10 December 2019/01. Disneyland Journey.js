function foo(input) {
    let m = Number(input[0])
    let s = 0;
    for (let i = 1; i <= Number(input[1]); i++) {
        if(i % 4 === 0){ s += s * 0.25 }
         else if(i % 2 === 1 ){ s -= s * 0.16 } 
    s += m * 0.25;    
    }
s > m ? console.log(`Bravo! You can go to Disneyland and you will have ${(s-m).toFixed(2)}lv. for souvenirs.`) 
: console.log(`Sorry. You need ${(m-s).toFixed(2)}lv. more.`);
}
foo([ '1000', '4' ]);