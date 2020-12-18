function foo(input) {
    let obj = {
        'File name': '',
        'File extension': '',
    };
    let derectoryIndex = input.lastIndexOf('\\');
    let exIdex = input.lastIndexOf('.');
    let file = input.substring(derectoryIndex +1, exIdex);
    let extension = input.substring(exIdex +1)
    obj['File name'] = file;
    obj['File extension'] = extension;
    for (const key in obj) { console.log(`${key}: ${obj[key]}`); }
}

foo('C:\\Projects\\Data-Structures\\LinkedList.cs');