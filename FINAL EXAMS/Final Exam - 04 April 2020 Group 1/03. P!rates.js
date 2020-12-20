function foo(input) {
    let obj = {}
    let list = {
        'Plunder': (town, people, gold) => {
            obj[town].people -= people
            obj[town].gold -= gold
            console.log(`${town} plundered! ${gold} gold stolen, ${people} citizens killed.`);
            if(obj[town].people <= 0 || obj[town].gold <= 0) { delete obj[town]; console.log(`${town} has been wiped off the map!`); }
        },
        'Prosper': (town, gold) => {
            if(gold > 0) {
                obj[town].gold += gold
                console.log(`${gold} gold added to the city treasury. ${town} now has ${obj[town].gold} gold.`);
            } else { console.log(`Gold added cannot be a negative number!`); }
        },
    }
    input.slice(0, input.indexOf('Sail')).forEach(x => {
        let [ town, people, gold ] = x.split('||').map( x => isNaN(x) ? x : Number(x) )
        if( obj[town] === undefined ) { obj[town] = {people, gold} }
        else { obj[town].people += people; obj[town].gold += gold }
    });
    input.slice(input.indexOf('Sail') + 1, input.indexOf('End')).forEach(x => {
        let [ cmd, a, b, c ] = x.split('=>').map( x => isNaN(x) ? x : Number(x) )
        list[cmd](a, b, c)
    });
    if(Object.keys(obj).length > 0) { 
        console.log(`Ahoy, Captain! There are ${Object.keys(obj).length} wealthy settlements to go to:`); 
        Object.entries(obj).sort( (a,b) => b[1].gold - a[1].gold || a[0].localeCompare(b[0]))
            .forEach(x => { console.log(`${x[0]} -> Population: ${x[1].people} citizens, Gold: ${x[1].gold} kg`); });
    } else { console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`); }
}
foo(['Tortuga||345000||1250',
    'Santo Domingo||240000||630',
    'Havana||410000||1100',
    'Sail',
    'Plunder=>Tortuga=>75000=>380',
    'Prosper=>Santo Domingo=>180',
    'End'])
// foo(['Nassau||95000||1000',
//     'San Juan||930000||1250',
//     'Campeche||270000||690',
//     'Port Royal||320000||1000',
//     'Port Royal||100000||2000',
//     'Sail',
//     'Prosper=>Port Royal=>-200',
//     'Plunder=>Nassau=>94000=>750',
//     'Plunder=>Nassau=>1000=>150',
//     'Plunder=>Campeche=>150000=>690',
//     'End'])