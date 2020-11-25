function foo(array) {
    let inventory = array.shift().split(' ');
    

    for (let i = 0; i < array.length; i++) {
        let [command, item] = array[i].split(' ');
        switch(command){
            case 'Buy':
                buy(item);
                break;
            case 'Trash':
                trash(item)
                break;
            case 'Repair':
                repair(item)
                break;
            case 'Upgrade':
                upgrade(item)
                break;
        }
    }
    console.log(inventory.join(' '));
    

    function buy(item) {
        if(!inventory.includes(item)){
            inventory.push(item)
        }
    }
    function trash(item) {
        if(inventory.includes(item)){
            inventory = inventory.filter((inventory) => inventory !== item)
        }

    }
    function repair(item) {
        if(inventory.includes(item)){
            let repairItem = item;
            inventory = inventory.filter((inventory) => inventory !== item)
            inventory.push(repairItem)
        }
    }
    function upgrade(item) {
        let [equipment, upgrade] = item.split('-')
        if(inventory.includes(equipment)){
            let currentIndex = inventory.indexOf(equipment)
            inventory.splice(currentIndex + 1, 0, `${equipment}:${upgrade}`) 
        }

    }

}

foo( ['SWORD Shield Spear', 'Buy Bag', 'Trash Shield', 'Repair Spear', 'Upgrade SWORD-Steel'] );
foo( ['SWORD Shield Spear', 'Trash Bow', 'Repair Shield', 'Upgrade Helmet-V'] );