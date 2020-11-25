function foo(input) {
    let dictionary = {}

    for (const i of input) {
        let currentObj = JSON.parse(i)
        dictionary = Object.assign(dictionary, currentObj)
    }
    let keys = Object.keys(dictionary)
    keys.sort((a,b) => a.localeCompare(b))

    for (const i of keys) {
        console.log(`Term: ${i} => Definition: ${dictionary[i]}`);
    }
    
}

foo([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
  ]);