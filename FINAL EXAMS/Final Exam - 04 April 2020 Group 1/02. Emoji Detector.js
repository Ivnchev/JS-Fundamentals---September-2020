function foo(input) {
    let p = input[0].match(/(:{2}|\*{2})([A-Z][a-z]{2,})\1/g)
    let cool = input[0].match(/[\d]/g).reduce( (a,b) => a * b, 1)
    let result = [];
    console.log(`Cool threshold: ${cool}`);
    if(p){
        p.forEach(x => {
        let r = x.split(/[:\*]/g).filter(x => x !== '').join('').split('').map( x => x.charCodeAt()).reduce( (a,b) => a + b, 0)
        if(r > cool){ result.push(x) }
        });
        console.log(`${p.length} emojis found in the text. The cool ones are:\n${result.join('\n')}`);
    }
}

foo(['In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**']);
foo(['5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::'])
foo(["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."])
