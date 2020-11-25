function foo(input) {
    let numberOfSongs = input.shift();
    let category = input.pop();
    class Song {
        constructor(typeList, name, time){
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
        songs(){
            console.log(this.name);
        }
    }
    let songs = input.map(x =>{
        let [typeList, name, time] = x.split('_');
        let currentSong = new Song(typeList, name, time);
        return currentSong;
    });
    
    if(category === 'all'){
        songs.forEach((x) => console.log(x.name));
    }else{
        let filtered = songs.filter((x) => x.typeList === category);
        filtered.forEach((x) => console.log(x.name));
    }
}

foo([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite'
    ])