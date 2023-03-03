function movies(arrayOfCommands) {
    let moviesArray = []

    arrayOfCommands.forEach(element => {

        if (element.includes(`addMovie`)) {
            movieName = element.split(`addMovie `)[1]
            let moviesObj = {};
            moviesObj.name = movieName
            moviesArray.push(moviesObj)
        }
        if (element.includes(`directedBy`)) {
            let [movieName, director] = element.split(` directedBy `)
            moviesArray.map(movies => {
                if (movies.name === movieName) {
                    movies.director = director;
                }
            })
        }
        if (element.includes(`onDate`)) {
            let [movieName, date] = element.split(` onDate `)
            moviesArray.map(movies => {
                if (movies.name === movieName) {
                    movies.date = date;
                }
            })
        }

    });
    debugger
    moviesArray.forEach(movie => {
        if (movie.name && movie.date && movie.director) {
            console.log(JSON.stringify(movie))
        }
    })
}

movies([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
])