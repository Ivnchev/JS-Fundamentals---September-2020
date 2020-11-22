function solve(group, type, weekDay){
    group = Number(group);
    type = String(type);
    weekDay = String(weekDay);

    price = 0;
    total = 0;

    switch(type){
        case 'Students':
        if(weekDay === 'Friday'){
            price = 8.45;
            total = price * group;
        }else if(weekDay === 'Saturday'){
            price = 9.80;
            total = price * group;
        }else if(weekDay === 'Sunday'){
            price = 10.46;
            total = price * group;
        }
        if(group >= 30){
            total = total * 0.85;
        }
        break;
        case 'Business':
        if(weekDay === 'Friday'){
            price = 10.90;
            if(group >= 100){
            group -= 10;
            total = price * group;
            }else{
                total = price * group;
                }
        }else if(weekDay === 'Saturday'){
            price = 15.60;
            if(group >= 100){
                group -= 10;
                total = price * group;
                }else{
                total = price * group;
                }
        }else if(weekDay === 'Sunday'){
            price = 16;
            if(group >= 100){
                group -= 10;
                total = price * group;
                }else{
                total = price * group;
                }
        }
        break;
        case 'Regular':
        if(weekDay === 'Friday'){
            price = 15;
            total = price * group;
        }else if(weekDay === 'Saturday'){
            price = 20;
            total = price * group;
        }else if(weekDay === 'Sunday'){
            price = 22.50;
            total = price * group;
        }
        if (group >= 10 && group <= 20){
            total = total * 0.95;
        }
        break;
    }

    console.log(`Total price: ${total.toFixed(2)}`);

}
solve('40', 'Regular', 'Saturday');