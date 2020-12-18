function foo(word, string) {
    let wordLc = word.toLowerCase()
    string = string.toLowerCase()
    if(string.split(' ').includes(wordLc)){ console.log(word); } 
    else { console.log(`${word} not found!`); }
}
foo('java',
'JavaScript is the best programming language');