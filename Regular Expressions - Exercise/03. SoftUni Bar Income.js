function foo(input) {
    let totalIncome = 0;
    for (const order of input) {
        let match = /%(?<customer>[A-Z][a-z]+)%[^|$%.]*<(?<product>[\w]+)>[^|$%.]*.*\|(?<qty>[\d]+)\|[^|$%.\d]*[^\d]*(?<price>[\d]+\.?[\d]*)\$/g.exec(order);

        if(match){
            let totalPrice = Number(match.groups.price) * Number(match.groups.qty)
            totalIncome += totalPrice;
            console.log(`${match.groups.customer}: ${match.groups.product} - ${totalPrice.toFixed(2)}`);
        }

    }
    console.log(`Total income: ${totalIncome.toFixed(2)}`);
}

foo(['%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift'])
foo([
    '%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift'])