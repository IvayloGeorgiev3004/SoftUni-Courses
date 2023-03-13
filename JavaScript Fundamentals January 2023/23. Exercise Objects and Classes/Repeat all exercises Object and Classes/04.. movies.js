function movies(array) {
    class Movie {
        constructor(name, director, date) {
            this.name = name;
            this.director = director;
            this.date = date;
        }
    }

    let moviesArray = []
    for (let commands of array) {
        if (commands.includes("addMovie")) {
            let movieName = commands.split('addMovie ')[1]
            let movie = new Movie(movieName, null, null)
            moviesArray.push(movie)
        }
        if (commands.includes("directedBy")) {
            let movieName = commands.split(' directedBy ')[0]
            let director = commands.split(' directedBy ')[1]
            moviesArray.forEach(element => {
                if (element.name === movieName) {
                    element.director = director;
                }
            })

        }
        if (commands.includes("onDate")) {
            let movieName = commands.split(' onDate ')[0]
            let date = commands.split(' onDate ')[1]
            moviesArray.forEach(element => {
                if (element.name === movieName) {
                    element.date = date;
                }
            })

        }
    }
    moviesArray.forEach(element => {
        if (element.name && element.date && element.director) {
            console.log(JSON.stringify(element))
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