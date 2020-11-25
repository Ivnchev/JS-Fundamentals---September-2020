function foo(arrNums, commands) {
    let isEnd = false;
    for (let i = 0; i < commands.length; i++) {
        let newArr = [];
        let current = commands[i].split(' ');
        let command = String(current.shift());
        let index = Number(current.shift());
        let elements = current.map(Number);
        switch(command){
            case 'add':
                addNum(index, elements[0])
                break;
            case 'addMany':
                addMany(index, elements)
                break;
            case 'contains':
                contains(arrNums, index);
                break;
            case 'remove':
                arrNums.splice(index, 1);
                break;
            case 'shift':
                shift(arrNums, index)
                break;
            case 'sumPairs':
                sumPairs(arrNums, newArr)
                arrNums = newArr;
                break;
            case 'print':
                isEnd = true;
                break;
        }
        if(isEnd){
            if(arrNums.length > 0){
            console.log(`[ ${arrNums.join(', ')} ]`);
            } else {
                console.log(`[]`)
            }
            break;
        }
    }

    function addNum(param1,param2) { 
        arrNums.splice(param1 , 0 , Number(param2));
    }
    function addMany(param1,param2) { 
        arrNums.splice(param1, 0, ...param2);
    }
    
    function shift(param1, param2) {

        for (let j = 0; j < param2; j++) {
            let shiftNum = param1.shift()
            param1.push(shiftNum);
        }
    }
    function contains(param1, param2) {
        let contains = (element) => element == param2;
                if(contains){
                    console.log(param1.findIndex(contains));
                }else{
                    console.log(-1);
                }         
    }
    
    function sumPairs(param1, param2) {
        for (let k = 0; k <= param1.length-1; k+= 2) {
            if(param1[ k + 1 ]){
            let currentSum = param1[ k ] + param1[ k + 1 ];
            param2.push(currentSum);
            }else{
                param2.push(param1[k]);
            }
        }
    }
}

// foo([1, 2, 4, 5, 6, 7], ['add 1 8', 'contains 1', 'contains 3', 'print']);
foo([1, 2, 3, 4, 5], ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 3', 'print']);
// foo([1, 2, 4, 5, 6, 7], ['add 1 8', 'contains 1', 'contains -3', 'print']);
// foo([2, 2, 4, 2, 4], ["add 1 4", "sumPairs", "print"]);
// foo([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],["sumPairs", "sumPairs", "addMany 0 -1 -2 -3", "print"]);