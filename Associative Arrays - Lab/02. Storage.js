function foo(input) {
    let map = new Map();
    input.forEach(x => {
        let [product, qty] = x.split(' ');
        if(!map.has(product)){
            map.set(product, Number(qty))
        }else {
            let curnQty = map.get(product)
            let newQty = curnQty += Number(qty)
            map.set(product,newQty)
        }
    });
    for (const key of map) {
        console.log(`${key[0]} -> ${key[1]}`);
    }
}
foo(
    ['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']);