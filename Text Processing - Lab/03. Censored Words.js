function foo(str, word){
    let count = 0;
    let index = str.indexOf(` ${word} `)
    while(index > -1){
        count++;
        index = str.indexOf(` ${word} `, index + 1)
    }
    if(str.startsWith(word)){ count++;}
    if(str.endsWith(word)){ count++;}
    console.log(count);
}

foo("This is a word and it also is a sentence","is")