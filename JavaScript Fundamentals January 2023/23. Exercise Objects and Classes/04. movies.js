// function movies(array) {
//     let moviesArray = [];
//     let moviesFinalArray = [];
//     let movieName = ""
//     let director = ""
//     let date = ""

//     class Movies {
//         constructor(name, director, date) {
//             this.name = name;
//             this.director = director;
//             this.date = date;
//         }
//     }

//     let moviesInfo = {
//         name: "Godfather",

//     };

//     for (let commands of array) {
//         let command = commands.split(" ")
//         if (command[0] === "addMovie") {
//             command.splice(0, 1)
//             movieName = command.join(" ")
//             moviesArray.push(movieName)
//             let newMovie = new Movies(movieName)
//             moviesFinalArray.push(newMovie)

//         }
//         if (command.indexOf("directedBy") !== -1) {
//             let indexToRemove = command.indexOf("directedBy")
//             command.splice(indexToRemove, 1)
//             movieName = command.splice(0, indexToRemove).join(" ")
//             director = command.splice(0, command.length).join(" ")
//             if (moviesArray.includes(movieName)){
//                 let movieIndex = moviesArray.indexOf(movieName)
//                 moviesArray.splice(movieIndex,1,movieName + " | " +  director).
//                 debugger
//             }


//             let match = moviesFinalArray.find(item => item.name === movieName)
//             if (match !== undefined) {
//                 let newDirector = new Movies(movieName, director)
//                 moviesFinalArray.push(newDirector)
//             }


//         }
//         if (command.indexOf("onDate") !== -1) {
//             let indexToRemove = command.indexOf("onDate")
//             command.splice(indexToRemove, 1)
//             movieName = command.splice(0, indexToRemove).join(" ")
//             date = command.splice(0, command.length).join(" ")

//             if (moviesArray.includes(movieName)){
//                 let movieIndex = moviesArray.indexOf(movieName)
//                 let movieToAdd = moviesArray[movieIndex]
//                 debugger
//                 moviesArray.splice(movieIndex,1,movieToAdd + " | "+ date)
//             }

//             let match = moviesFinalArray.find(item => item.name === movieName)
//         }

//     }
//     debugger
// }


// movies([
//     'addMovie Fast and Furious',
//     'addMovie Godfather',
//     'Inception directedBy Christopher Nolan',
//     'Godfather directedBy Francis Ford Coppola',
//     'Godfather onDate 29.07.2018',
//     'Fast and Furious onDate 30.07.2018',
//     'Batman onDate 01.08.2018',
//     'Fast and Furious directedBy Rob Cohen'
// ])


function movies2(arr){

    for(let text of arr){

        let movieObj = {};

        if(text.includes(`addMovie`)){

            let name = text.replace("addMovie ", "");

            movieObj.name = name;

            for(let second of arr){

                if (second.includes(`${name} onDate`)){

                    let theDate = second.replace(`${name} onDate `, "");
                    movieObj.date = theDate;
                }

                if(second.includes(`${name} directedBy`)){

                    let director = second.replace(`${name} directedBy `, "");
                    movieObj.director = director;

                }

            }
               
            if (Object.keys(movieObj).length === 3) {
                console.log(JSON.stringify(movieObj));
              }

        }

    }

}


movies2(

[

    'Inception directedBy Christopher Nolan',

    'Godfather directedBy Francis Ford Coppola',

    'Godfather onDate 29.07.2018',

    'Batman directedBy Christopher Nolan',

    'Fast and Furious onDate 30.07.2018',

    'Batman onDate 01.08.2018',

    'Fast and Furious directedBy Rob Cohen',

    'addMovie Fast and Furious',

    'addMovie Batman',

    'addMovie Godfather',

]

);