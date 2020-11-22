function solve(array) {
    let strArray = array.toString().split('|');
    let dataArray = [];
    let health = 100;
    let coins = 0;
    let counter = 0;
    let deadBy = 0;
    let isAlive = true;
    for (let i = 0; i < strArray.length; i++) {
      let currentElement = strArray[i].split(' ');
      let currentMonster = currentElement[0];
      let currentDamage = currentElement[1];
      dataArray.push(currentMonster);
      dataArray.push(currentDamage);
    }
   
    for (let i = 0; i < dataArray.length; i += 2) {
      if (isAlive) {
        let currentEl = dataArray[i];
        let currentPoints = Number(dataArray[i + 1]);
        counter++;
        if (currentEl === 'chest') {
          coins += currentPoints;
          console.log(`You found ${currentPoints} coins.`);
        } else if (currentEl === 'potion') {
          let currentHealt = health;
          health += currentPoints;
          if (health >= 100) {
            currentPoints = 100 - currentHealt;
            health = 100;
            console.log(`You healed for ${currentPoints} hp.`);
            console.log(`Current health: 100 hp.`);
          } else {
            console.log(`You healed for ${currentPoints} hp.`);
            console.log(`Current health: ${health} hp.`);
          }
        } else {
          health -= currentPoints;
          if (health > 0) {
            console.log(`You slayed ${currentEl}.`);
          } else {
            isAlive = false;
            deadBy = currentEl;
            console.log(`You died! Killed by ${deadBy}.`);
            console.log(`Best room: ${counter}`);
          }
        }
      } else {
        break;
      }
    }
    if (isAlive) {
      console.log("You've made it!");
      console.log(`Coins: ${coins}`);
      console.log(`Health: ${health}`);
    }
}

// solve(['rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000']);
solve(['cat 10|potion 30|orc 10|chest 10|snake 25|chest 110']);