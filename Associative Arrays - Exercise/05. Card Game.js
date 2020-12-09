function foo(input) {
    //create map
    let player = generateDeck(input);
    let cardMap = {
        p:  {'J': 11,
            'Q': 12,
            'K': 13,
            'A': 14,
            },
        t:  {
            'S': 4,
            'H': 3,
            'D': 2,
            'C': 1,
        }
        }
    Object.keys(player).forEach(x => {
        console.log(`${x}: ${totalDeck(player[x])}`);
    })

    function totalDeck(cardSet) {
        let total = 0;
        cardSet.forEach(x =>{
            let token = x.split('');
            let value = token.slice(0,token.length -1).join('');
            let suit = token.slice(-1).join('');
            let p = 0;

            if(!cardMap.p[value]){
                p = Number(value);
            } else {
                p = cardMap.p[value];
            }
            total += (p* cardMap.t[suit]);
        })
        return total
    }
    
    function generateDeck(array){
        let obj = {};
        array.forEach(x => {
            let [player, deck] = x.split(': ')
            
            if(!obj[player]){
                obj[player] = new Set(deck.split(', '));
            }else {
                deck.split(', ').forEach(x => {obj[player].add(x)});
            }
            
        });
        return obj
    }

}
foo([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
    ]);