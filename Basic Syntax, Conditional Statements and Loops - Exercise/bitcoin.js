function solve(input){
let wDays = Number(input.length);
let minedGold = Number(input.shift());
let counter = 0;
let bitcoin = 11949.16;
let gold = 67.51;
let bitcoinEarnet = 0;
let goldEarned = 0;
let dayEarnetBitcoin = 0;
let result = 0;
let isGet = false;



while ( counter !== (wDays + 1)){
    if(counter % 3 === 0){
        minedGold *= 0.70;
    }
    goldEarned += gold * minedGold;
    if(goldEarned >= bitcoin){
        do{
            bitcoinEarnet += counter;
        }while(bitcoinEarnet <= 1){
            result = Math.floor(goldEarned / bitcoin);
            goldEarned -= result * bitcoin;
            isGet = true;
        }
    }else{
        minedGold = Number(input.shift()); 
        counter++;
    }

    //if(bitcoinEarnet >= 1 && bitcoinEarnet <= 1){
    //    dayEarnetBitcoin = counter;
    //    minedGold = Number(input.shift());
    //    counter++;
    //}else{
    //    break;
    //}

}
console.log(`Bought bitcoins: ${bitcoinEarnet}`);
if(result > 0){
console.log(`Day of the first purchased bitcoin: ${dayEarnetBitcoin}`);
}
console.log(`Left money: ${goldEarned.toFixed(2)} lv.`);

}

solve(['3124.15', '504.212', '2511.124']);