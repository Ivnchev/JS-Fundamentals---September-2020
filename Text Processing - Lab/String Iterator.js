function foo(input) {
    let words = input.split(' ');
    let iterator = {
        next: function() {
            let isDone = words.length === 0;
            let currentWord = words.shift()
            return{
                value: currentWord,
                done: isDone
            }
        }
    }
    let nextEl = iterator.next();
    while(!nextEl.done){
        console.log(nextEl.value);
        nextEl = iterator.next();
    }
}
foo("Et cillum do voluptate cillum ut cupidatat aliqua.");