function foo(input) {
    let myNums = input.shift();
    let command = input.shift();
   
    let funcs = {
      reverse: function (tokens) {
        let startIndex = Number(tokens[1]);
        let countElements = Number(tokens[3]);
   
        let neededNums = myNums.splice(startIndex, countElements).reverse();
        myNums.splice(startIndex, 0, ...neededNums);
   
        return myNums.flat(1);
      },
      sort: function (tokens) {
        let startIndex = Number(tokens[1]);
        let count = Number(tokens[3]);
        let neededNums = myNums.splice(startIndex, count).sort();
        myNums.splice(startIndex, 0, neededNums);
   
        return myNums.flat(1);
      },
      remove: function (tokens) {
        let deleteNums = Number(tokens[0]);
        myNums.splice(0, deleteNums);
        return myNums;
      },
    };
   
    while (command !== "end") {
      let tokens = command.split(" ");
      let currentCommand = tokens.shift();
      myNums = funcs[currentCommand](tokens);
   
      command = input.shift();
    }
   
    console.log(myNums.join(", "));
  }

foo([["1", "2", "5", "8", "7", "3", "10", "6", "4", "9"],"reverse from 2 count 4","end"]);
foo([["1", "2", "5", "8", "7", "3", "10", "6", "4", "9"],"sort from 2 count 4","end"]);
foo([["1", "2", "5", "8", "7", "3", "10", "6", "4", "9"],"remove 2","end"]);
