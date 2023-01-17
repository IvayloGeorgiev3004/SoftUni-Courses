function movieRating(input) {
    let totalMoviesNumber = Number(input[0])
    let currentRating = 0;
    let bestRating = Number.MIN_SAFE_INTEGER
    let currentMovie = ""
    let bestMovie = ""
    let averageRating = 0;
    let worstRating = Number.MAX_SAFE_INTEGER
    let worstMovie = ""
    let index = 1;


    for (let i = 1; i <= totalMoviesNumber; i++) {
        currentMovie = input[index];
        index++
        currentRating = Number(input[index]);
        if (currentRating > bestRating) {
            bestRating = currentRating
            bestMovie = currentMovie
        } else if (currentRating < worstRating) {
            worstRating = currentRating;
            worstMovie = currentMovie
        }
        averageRating += currentRating
        index++

    }
    console.log(`${bestMovie} is with highest rating: ${bestRating.toFixed(1)}`)
    console.log(`${worstMovie} is with lowest rating: ${worstRating.toFixed(1)}`)
    console.log(`Average rating: ${(averageRating / totalMoviesNumber).toFixed(1)}`)

}
movieRating
    (["3",
        "Interstellar",
        "8.5",
        "Dangal",
        "8.3",
        "Green Book",
        "8.2"])

