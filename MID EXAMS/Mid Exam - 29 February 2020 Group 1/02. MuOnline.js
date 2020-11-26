function foo(input) {
    let health = 100;
    let coins = 0;
    let counter = 0;
    let isAlive = true;
    class Room {
        constructor(object, number){
            this.object = object
            this.number = number
        }
    }
    let rooms = input.toString().split('|').map(x => {
        let [object, number] = x.split(' ');
        let currentRoom = new Room (object, Number(number));
        return currentRoom;
    });
    rooms.some(x => {
        if(x.object !== 'potion' && x.object !== 'chest'){
            health -= x.number;
            counter++;
            if(health <= 0) {
                console.log(`You died! Killed by ${x.object}.\nBest room: ${counter}`)
                isAlive = false;
                return true;
            }else {
                console.log(`You slayed ${x.object}.`)
            }
        }else if(x.object === 'potion'){
            let currentHealth = health;
            health += x.number;
            if(health > 100){
                currentHealth = 100 - currentHealth;
                health = 100;
                console.log(`You healed for ${currentHealth} hp.`);
                console.log(`Current health: ${health} hp.`);
            }else{
                console.log(`You healed for ${x.number} hp.`);
                console.log(`Current health: ${health} hp.`);
            }
            counter++;
        }else if(x.object === 'chest'){
            console.log(`You found ${x.number} bitcoins.`);
            counter++;
            coins += x.number;
        }
    });
    if(isAlive){
        console.log(`You've made it!\nBitcoins: ${coins}\nHealth: ${health}`);
    }
}

// foo(['rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000']);
foo([ 'cat 10|potion 30|orc 10|chest 10|snake 25|chest 110' ]);
