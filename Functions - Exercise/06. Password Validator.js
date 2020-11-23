function foo(input) {
    let arrPass = [];
    for (let index of input) {
     arrPass.push(index);
    } 
    let first = firstCheck(arrPass);
    let second = secondCheck(arrPass);
    let third = thirdCheck(arrPass);
    if(first && second && third){
        console.log("Password is valid");  
    }
    function firstCheck(arrPass) {
        if(arrPass.length < 6 || arrPass.length > 10){
            console.log("Password must be between 6 and 10 characters");
            return false;
        } 
        return true;
    }
    function secondCheck(arrPass) {
        for (let i of arrPass) {
            if( i.charCodeAt() < 48 || i.charCodeAt() > 57 && i.charCodeAt() < 65 || i.charCodeAt() > 122){
                console.log("Password must consist only of letters and digits");
                return false;
            }
        }
        return true;
    } 
    function thirdCheck(arrPass) {
        let counter = 0;
        for (let i of arrPass) {
            if(i.charCodeAt()> 47 && i.charCodeAt() < 58){
                counter++;
            }
            if(counter == 2){
                break;
            }
        }
        if (counter < 2) {
            console.log("Password must have at least 2 digits");
            return false;
        }
        return true;
    }  
}
foo('logIn');
// foo('MyPass123');
// foo('Pa$s$s');