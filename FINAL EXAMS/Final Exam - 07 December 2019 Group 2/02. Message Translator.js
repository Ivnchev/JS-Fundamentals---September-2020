function foo(input) {
    input.slice(1).forEach(x => {
        let p = x.match(/(!)([A-Z][a-z]{2,})\1:\[([A-Za-z]{8,})\]/g)
        if(p){
            p = p[0].split(/[!:\[\]]/g).filter(x => x !== '')
            console.log(`${p[0]}: ${p[1].split('').map(x => x.charCodeAt()).join(' ')}`);
        } else { console.log('The message is invalid'); }
    });
}

foo(['2', '!Send!:[IvanisHere]', '*Time@:[Itis5amAlready]'])
foo(['3', 'go:[outside]', '!drive!:YourCarToACarWash', '!Watch!:[LordofTheRings]'])
foo(['3', '!play!:[TheNewSong]', '!Ride!:[Bike]', '!Watch!:[LordofTheRings]'])