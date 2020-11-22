function solve(arr) {
    let totalBC = 0;
    let dayBC = 0;
    let left = 0;
    let days = 0;
    let money = 0;
    let totalMoney = 0;
    for (let i = 0; i < arr.length; i++) {
      days++;
      if (days % 3 === 0) {
        arr[i] = arr[i] - (arr[i] * 0.3);
      } 
      money = arr[i] * 67.51;
      totalMoney += money;
      while (totalMoney >= 11949.16) {
        totalMoney -= 11949.16;
        totalBC++;
        if (totalBC === 1) {
          dayBC = days;
        }     
      }
    }
    console.log(`Bought bitcoins: ${totalBC}`);
    if (dayBC > 0) {
    console.log(`Day of the first purchased bitcoin: ${dayBC}`);
    }
    console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);
  };
  solve(['3124.15', '504.212', '2511.124']);