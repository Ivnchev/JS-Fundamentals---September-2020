function foo(text) {
    let characters = '';
    for (let char of text.split('')) {
        let lastChar = characters.slice(-1)
        if(lastChar !== char){
            characters += char;
        }
    }
    console.log(characters);
}

foo('aaaaabbbbbcdddeeeedssaa');