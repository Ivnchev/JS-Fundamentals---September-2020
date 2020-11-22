function solve(input){
    let username = String(input.shift());
    let currentPass = String(input.shift());
    let password = username.split("").reverse().join("");
    let counter = 0;
    let isBlocked = false;
    while(password !== currentPass){
        counter++;
        if(counter < 4){
            console.log("Incorrect password. Try again.");
        }else{
            isBlocked = true;
            break;
        }
        
        
        currentPass = input.shift();
    }

    if(isBlocked){
        console.log(`User ${username} blocked!`);
        
    }else{
        console.log(`User ${username} logged in.`);
        
    }

}
solve(['Acer','login','go','let me in','recA']);
