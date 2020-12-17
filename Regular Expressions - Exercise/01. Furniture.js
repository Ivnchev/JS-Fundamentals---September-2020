function foo(input) {
    let furnitures = [];
    let total = 0;
    input.forEach(x => {
        let matches = />>(?<product>[A-Za-z]+)<<(?<price>\d+\.?[\d]*)!(?<qty>[\d]+)/g.exec(x)
        if(matches) {
            furnitures.push(matches.groups.product)
            total += Number(matches.groups.price) * Number(matches.groups.qty)
        }
    });
    console.log(`Bought furniture:`);
    if(furnitures.length > 0){ console.log(furnitures.join('\n')); }
    console.log(`Total money spend: ${total.toFixed(2)}`);    
}
foo([ '>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase' ]);