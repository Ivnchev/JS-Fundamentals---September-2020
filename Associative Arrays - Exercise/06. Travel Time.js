function foo(input) {
    const travel = {};
    input.forEach(x => {
        let [country, town, price] = x.split(' > ');
        price = Number(price);
        if(!travel.hasOwnProperty(country)){ travel[country] = [] }
        let curnTown = travel[country].find((o) => o.town === town)
        if(!curnTown){ 
            travel[country].push({town, price});
        } else if(price < curnTown.price){
            curnTown.price = price
        }
        
    });
    let output = '';
    Object.keys(travel).sort((a,b) => a.localeCompare(b)).forEach(country =>{
        output += `${country} -> `
        travel[country].sort((a,b) => a.price - b.price).forEach( o =>{
            output += `${o.town} -> ${o.price} `
        })
        output += '\n';

    })
    console.log(output.trim());
}
foo([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
    ]
    );