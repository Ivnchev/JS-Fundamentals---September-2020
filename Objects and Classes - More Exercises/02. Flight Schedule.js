function foo(input) {
    let listOfFlights = {};
    input[0].forEach(x => {
        const [flightNumber, country] = x.split(' ');
        listOfFlights[flightNumber] = {
            Destination: country,
            Status: 'Ready to fly'
        }
    });
    input[1].forEach(x => {
        const [flightNumber, status] = x.split(' ');
        if(listOfFlights.hasOwnProperty(flightNumber)){
            listOfFlights[flightNumber].Status = status;
        }
    })

    for (let key in listOfFlights) {
        if(listOfFlights[key].Status == String(input[2])){
            console.log(listOfFlights[key]);
        }
    }
}

// foo([['WN269 Delaware',
// 'FL2269 Oregon',
//  'WN498 Las Vegas',
//  'WN3145 Ohio',
//  'WN612 Alabama',
//  'WN4010 New York',
//  'WN1173 California',
//  'DL2120 Texas',
//  'KL5744 Illinois',
//  'WN678 Pennsylvania'],
//  ['DL2120 Cancelled',
//  'WN612 Cancelled',
//  'WN1173 Cancelled',
//  'SK430 Cancelled'],
//  ['Cancelled']
// ]);
foo([["WN269 Delaware","FL2269 Oregon",
"WN498 Las vegas","WN3145 Ohio",
"WN612 Alabama","WN4010 New York",
"WN1173 California","DL2120 Texas",
"KL5744 Illinois","WN678 Pennsylvania"],
["DL2120 Cancelled","WN612 Cancelled",
"WN1173 Cancelled","SK330 Cancelled"],
["Ready to fly"]])