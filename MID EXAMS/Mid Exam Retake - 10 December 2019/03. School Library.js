function foo(input) {
    let books = input.shift().split('&')
    input.forEach(x => {
        let [command, book1, book2] = x.split(' | ')
        if(command === 'Add Book'){
            if(!books.includes(book1)){
                books.unshift(book1);
            }
        }else if(command === 'Take Book'){
            if(books.includes(book1)){
                books.splice(books.indexOf(book1),1);
            }
        }else if(command === 'Swap Books'){
            if(books.includes(book1) && books.includes(book2)){
                let swap = books.indexOf(book2);
                books.splice(books.indexOf(book1),1, book2);
                books.splice(swap,1,book1);   
            }
        }else if(command === 'Insert Book'){
            books.push(book1)
        }else if(command === 'Check Book'){
            if(books[book1]){
                console.log(books[book1]);
            }
        }
    });
    console.log(books.join(', '));
}

foo([
    'Don Quixote&The Great Gatsby&Moby Dick&Hamlet',
    'Add Book | The Odyssey',
    'Take Book | Don Quixote',
    "Insert Book | Alice's Adventures in Wonderland",
    'Check Book | 3',
    'Done',
    '',
    '',
    ''
  ]);
foo([
    'Anna Karenina&Heart of Darkness&Catch-22& The Stranger',
    'Add Book | David Copperfield',
    'Add Book | One Thousand and One Nights',
    'Swap Books | One Thousand and One Nights | Catch-22',
    'Take Book | David Copperfield',
    'Insert Book | The Stories of Anton Chekhov',
    'Check Book | 17',
    'Done',
    ''
  ])