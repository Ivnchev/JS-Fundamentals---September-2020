function foo(input) {
    let obj = input.splice(0, input.shift())
        .map( x => x.split('|').map(x => isNaN(x) ? x : Number(x)))
        .reduce( (a,[x,y,z]) => {
            a[x] = {miles: y, fuel: z}
            return a
        },{})
    let list = {
        'Drive': (a,b,c) => {
            if(obj[a].fuel - c > 0){ 
                let r = []
                obj[a].fuel -= c
                obj[a].miles += b
                r.push(`${a} driven for ${b} kilometers. ${c} liters of fuel consumed.`)
                if( obj[a].miles >= 100000 ) { delete obj[a]; r.push(`Time to sell the ${a}!`)}
                console.log(r.join('\n'));
            } else { console.log('Not enough fuel to make that ride'); }
        },
        'Refuel': (a,b) => {
            if(obj[a].fuel + b >= 75){ b = 75 - obj[a].fuel }
            obj[a].fuel += b
            console.log( `${a} refueled with ${b} liters` )
        },
        'Revert': (a,b) => {
            obj[a].miles -= b
            if(obj[a].miles <= 10000){ obj[a].miles = 10000}
            else { console.log( `${a} mileage decreased by ${b} kilometers` ) }
        },
    }
    input.slice(0, input.indexOf('Stop')).forEach(x => {
        let [cmd, a,b,c] = x.split(' : ').map(x => isNaN(x) ? x : Number(x))
        list[cmd](a,b,c)
    });
    Object.entries(obj).sort( (a,b) => b[1].miles - a[1].miles || a[0].localeCompare(b[0]))
        .forEach(x => { console.log(`${x[0]} -> Mileage: ${x[1].miles} kms, Fuel in the tank: ${x[1].fuel} lt.`); });
}

foo([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'])
