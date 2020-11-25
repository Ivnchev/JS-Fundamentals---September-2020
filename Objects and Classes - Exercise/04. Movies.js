function foo(input) {
    let movies = [];
    input.forEach(el => {
        const data = el.split(' ');
        const addIndex = data.indexOf('addMovie');
        const directorIndex = data.indexOf('directedBy');
        const onDateIndex = data.indexOf('onDate');

        if (addIndex > -1) {
            movies.push({name: data.slice(addIndex + 1).join(' ')})
        }
        if(directorIndex > -1){
            const name = data.slice(0, directorIndex).join(' ');
            const director = data.slice(directorIndex + 1).join(' ');
            movies.forEach(movie =>{
                if(movie.name === name){
                    movie.director = director;
                }
            })
        }
        if(onDateIndex > -1){
            const name = data.slice(0, onDateIndex).join(' ');
            const date = data.slice(onDateIndex+1).join(' ');
            movies.forEach(movie =>{
                if(movie.name === name){
                    movie.date = date;
                }
            })

        }
    });
    movies.forEach(movie => {
        if(movie.name !== undefined && movie.director !== undefined && movie.date !== undefined){
            console.log(JSON.stringify(movie));
        }
    })
}

foo([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]);