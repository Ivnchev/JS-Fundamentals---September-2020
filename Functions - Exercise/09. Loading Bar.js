function foo(input) {
    let num = Number(input);
    let loadArr = [];
    let result = (num / 10); 
    loading();
    resultLoading(result); 
    function loading() {
        let loadStr = '[..........]';  
        for (let i of loadStr) {
            loadArr.push(i);
        }
    }
    function resultLoading(result) {
        for (let i = 1; i < loadArr.length; i++) {
            if (i <= result) loadArr[i]= "%";
        }
        if(result < 10){
            console.log(`${num}% ${loadArr.join('')}`);
            console.log(`Still loading...`);
        }else{
            console.log('100% Complete!');
            console.log(loadArr.join(''));
        }
    }
}

foo(30);
foo(50);
foo(100);