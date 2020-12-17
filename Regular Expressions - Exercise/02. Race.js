function foo(input) {
    let racers = input.shift().split(', ');
    let race = {}
    input.slice( 0, input.indexOf('end of race'))
        .forEach(x => {
            let patternName = x.match(/[A-Za-z]/g)  
            let name = patternName.join('');
            if(patternName && racers.includes(name)){
                let patternDistance = x.match(/[\d]/g)
                let distance  =  patternDistance.map(Number).reduce((a,b) => a + b)
                if(!race[name]){ race[name] = 0; }
                race[name] += distance
            }
        });
    let sorted = Object.keys(race).sort((a,b) => race[b] - race[a]).slice(0,3)
    for (const index in sorted)  {
        switch(index){
            case '0': console.log(`1st place: ${sorted[index]}`); break;
            case '1': console.log(`2nd place: ${sorted[index]}`); break;
            case '2': console.log(`3rd place: ${sorted[index]}`); break;
        }
    }     
}

foo([
    'George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'
  ]);