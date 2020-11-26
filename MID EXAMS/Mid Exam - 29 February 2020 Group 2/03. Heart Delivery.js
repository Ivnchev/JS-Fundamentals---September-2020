function foo(input) {
    let neighborhood = input.shift().split('@').map(Number)
    let currentIndex = 0;
    input.forEach(x => {
        let [command, jump] = x.split(' ');
        if(command !== 'Love!'){
            currentIndex += Number(jump);

            if(currentIndex >= neighborhood.length) { currentIndex = 0; }
            if(neighborhood[currentIndex] === 0){
                console.log(`Place ${currentIndex} already had Valentine's day.`);
            } else {
                neighborhood[currentIndex] -= 2;

                if(neighborhood[currentIndex] === 0){
                    console.log(`Place ${currentIndex} has Valentine's day.`);
                }
            }
        }
    });
    console.log(`Cupid's last position was ${currentIndex}.`);
    let success = neighborhood.filter( x => x > 0)
    if(success.length > 0){
        console.log(`Cupid has failed ${currentIndex} places.`);
    }else {
        console.log("Mission was successful.");
    }
    
}

foo([ '10@10@10@2', 'Jump 1', 'Jump 2', 'Love!' ]);
foo([ '2@4@2',  'Jump 2', 'Jump 2', 'Jump 8', 'Jump 3', 'Jump 1', 'Love!' ])