function solve(input){
    year = Number(input);
    isLeap = false;
    isNotLeap = false;

    if( year % 400 === 0 ){
        isLeap = true;
    }else if(year % 100 === 0){
        isNotLeap = true;
    }else if( year % 4 === 0){
        isLeap = true;
    }else{
        isNotLeap = true;
    }
    
    if(isLeap){
        console.log('yes');
        
    }else if(isNotLeap){
        console.log('no');
    }
}
solve('2000');
