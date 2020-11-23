function foo(param) {
    let x1 = Number(param.shift());
    let y1 = Number(param.shift());
    let x2 = Number(param.shift());
    let y2 = Number(param.shift());
    
    let result = 0;
    let firstExpr = (x1, y1) => {
        result = 0;
        result = Math.sqrt(Math.pow(0 - x1,2) + Math.pow(0 - y1,2));
            if(Number.isInteger(result)){
            return true;
            }else {
                return false;
            }
    } 
    let secondExpr = (x2, y2) => {
        result = 0;
        result = Math.sqrt(Math.pow(x2 - 0, 2) + Math.pow(y2 - 0 ,2));
            if(Number.isInteger(result)){
            return true;
            }else {
                return false;
            }
    } 
    let tirthExpr = (x1, y1, x2, y2) => {
        result = 0;
        result = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1 ,2));
            if(Number.isInteger(result)){
            return true;
            }else {
                return false;
            }
    } 
    let first = firstExpr(x1, y1);
    let second = secondExpr(x2, y2);
    let thirth = tirthExpr(x1, y1, x2, y2);
    function results() {
    if (first) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    }else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }
    if (second) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    }else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }
    if (thirth) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    }else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
    }
    results();
}

foo([3, 0, 0, 4]);
foo([2, 1, 1, 1]);
