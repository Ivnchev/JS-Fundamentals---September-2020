function foo(word, string) {
    word.split(', ').forEach(x => {
        let findWord = '*'.repeat(x.length).toString();
        string = string.replace(findWord, x) 
    });
    console.log(string);
}

foo('great, learning',
'softuni is ***** place for ******** new programming languages')