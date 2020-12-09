function foo(input) {
    const tracker = {};
    const words = input.shift().split(' ').forEach(x => {
        tracker[x] = 0;
        if(tracker.hasOwnProperty(x)){
            let filtered = input.filter(k => k === x).length
            tracker[x] = filtered
        }
    });
    for (const key of Object.keys(tracker).sort((a,b) => tracker[b] - tracker[a])) {
        console.log(`${key} - ${tracker[key]}`);
    }
      
}

foo([
    'this sentence', 'In','this','sentence','you',
    'have','to','count','the','occurances','of','the',
    'words','this','and','sentence','because','this','is','your','task'
    ]);