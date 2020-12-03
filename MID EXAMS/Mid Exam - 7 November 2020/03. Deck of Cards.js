function foo(input) {
    let deck = input.shift().split(', ')
    let n = Number(input.shift());
    

    input.forEach(x => {
        let [command, index, card] = x.split(', ');
        
        if(command === 'Add'){ add(index) }
        else if( command === 'Insert'){ insert(index, card) }
        else if( command === 'Remove'){ remove(index) }
        else if( command === 'Remove At'){ removeAt(index) }
    });
    console.log(deck.join(', '));

    function add(card) {
        if(deck.includes(card)){
            console.log('Card is already bought');
        }else {
            console.log('Card successfully bought');
            deck.push(card)
        }
    }
    function remove(card) {
        if(deck.includes(card)){
            console.log('Card successfully sold');
            deck = deck.filter(x => x !== card)
        }else{
            console.log('Card not found');
        }
    }
    function insert(index, card) {
        index = Number(index)
        if(deck[index] !== undefined && !deck.includes(card)){
            console.log('Card successfully bought');
            deck.splice(index, 0, card)
        }else if(deck[index] === undefined){ console.log('Index out of range'); }
        else if(deck.includes(card)){ console.log('Card is already bought');}
    }
    function removeAt(index) {
        index = Number(index)
        if(deck[index] !== undefined){
            console.log('Card successfully sold');
            deck.splice(index, 1)
        }else {
            console.log('Index out of range');
        }
    }
}

// foo(["T-34-85 Rudy, SU-100Y, STG",
// "3",
// "Add, King Tiger(C)",
// "Insert, 2, IS-2M",
// "Remove, T-34-85 Rudy"]);

foo(["T 34, T 34 B, T92, AMX 13 57",
"4",
"Add, T 34",
"Remove, AMX CDC",
"Insert, 10, M60",
"Remove At, 1"])