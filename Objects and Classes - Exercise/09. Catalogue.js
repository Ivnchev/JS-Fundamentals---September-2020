function foo(input) {
    const products = {};
    input.forEach(x => {
        const dataBase = x.split(' : ');
        const product = dataBase[0];
        const price = dataBase[1];
        products[product] = price;
    });

    const keys = Object.keys(products);
    keys.sort((a, b) => a.localeCompare(b));
    const firstLetters = new Set([...keys.map(el => el[0])]);
    

    for (const letter of firstLetters) {
        console.log(`${letter}`);
        for (const key in keys) {
            if (keys[key][0] == letter) {
                console.log(`  ${keys[key]}: ${products[keys[key]]}`);
            }
        }
    }
}

foo([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
  ]
  );
