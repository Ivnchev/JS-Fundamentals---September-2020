function foo(obj, array) {
        array.forEach(x => {
            const [command, currentTab] = x.split(' ');
            if(command === 'Clear' || command === 'Close' || command === 'Open'){
                if(command !== 'Clear'){
                    if(command === 'Close'){
                        if(obj['Open Tabs'].includes(currentTab)){
                        close(obj,currentTab, x)
                        }
                    }else if(command === 'Open'){
                        open(obj,currentTab, x)
                    }
                }else{
                    clear(obj)
                }
            }
        });
        function close(obj,currentTab, x) {
            obj['Open Tabs'].splice(obj['Open Tabs'].indexOf(currentTab), 1);
            obj['Recently Closed'].push(currentTab);
            obj['Browser Logs'].push(x);
        }
        function open(obj,currentTab, x) {
            obj['Open Tabs'].push(currentTab);
            obj['Browser Logs'].push(x);
        }
        function clear(obj) {
            obj['Open Tabs'] = [];
            obj['Recently Closed'] = [];
            obj['Browser Logs'] = [];
        }
        
        console.log(`${obj["Browser Name"]}`)
        for (const key in obj) {
            if(key !== "Browser Name"){
            console.log(`${key}: ${obj[key].join(', ')}`);
            }
        }
}

foo(
    {"Browser Name":"Google Chrome","Open Tabs":["Facebook","YouTube","Google Translate"],
    "Recently Closed":["Yahoo","Gmail"],
    "Browser Logs":["Open YouTube","Open Yahoo","Open Google Translate","Close Yahoo","Open Gmail","Close Gmail","Open Facebook"]},
    ['kur',"Close Facebook", "Open StackOverFlow", "Open Google"]
);
foo({"Browser Name":"Mozilla Firefox",
"Open Tabs":["YouTube"],
"Recently Closed":["Gmail", "Dropbox"],
"Browser Logs":["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]},
["Open Wikipedia", "Clear History and Cache", "Open Twitter"]
)