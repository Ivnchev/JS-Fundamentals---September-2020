function foo(textArr) {
    let letter = textArr[0].split(' ')
    textArr[1].forEach(x => {
        let wordLength = '_'.repeat(x.length).toString();
        letter.forEach(z => {
            let check1 = wordLength + '.'
            let check2 = wordLength + ','
            if(z === wordLength){
                letter[letter.indexOf(z)] = x;
            }else if(z === check1 ){
                letter[letter.indexOf(z)] = x + '.';
            } else if(z === check2 ){
                letter[letter.indexOf(z)] = x + ',';
            }
        })
    });
    console.log(letter.join(' '));
}
foo(
['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]
)