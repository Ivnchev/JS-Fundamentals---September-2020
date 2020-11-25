function foo(stock, ordered){
    const products = {};
    stock.forEach((el, i) => {
        if(i % 2 === 0){
        const product = el;
        const quantity = Number(stock[i+1]);
        products[product] = quantity;
        }
    });
    ordered.forEach((el, i) =>{
        if(i % 2 === 0){
        const product = el;
        const quantity = Number(ordered[i+1]);
        if(products[product] === undefined){
            products[product] = 0;
        }
        products[product] += quantity;
        }
    })
    console.log(ordered);
    
    
    for (const product in products) {
        console.log(`${product} -> ${products[product]}`);
    }
}
foo(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);
