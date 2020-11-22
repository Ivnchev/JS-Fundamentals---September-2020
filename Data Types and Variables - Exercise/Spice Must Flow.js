function solve(input) {
    let yeld = Number(input);
    let dayCount = 0;
    let yeldleft = 0;

    while (yeld >= 100){
        dayCount++;
        yeldleft += (yeld - 26);
        yeld -= 10;
    }

    if(yeldleft > 26){
    yeldleft -= 26;
    }
    console.log(dayCount);
    console.log(yeldleft);
}

solve('111');