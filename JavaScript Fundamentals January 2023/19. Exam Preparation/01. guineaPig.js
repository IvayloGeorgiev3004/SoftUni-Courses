function guineaPig(array) {
    let food = array.shift() * 1000 // change from kg to grams
    let hay = array.shift() * 1000  // change from kg to grams
    let cover = array.shift() * 1000 // change from kg to grams
    let guineaPigWeight = array.shift() * 1000
    let day = 1

    while (day <= 30) {
        food -= 300;
        if (day % 2 === 0) {
            hay -= food * 0.05;
        }

        if (day % 3 === 0) {
            cover -= guineaPigWeight / 3;
        }

        if (hay <= 0 || food <= 0 || cover <= 0) {
            return `Merry must go to the pet store!`
        }
        day++
    }

    let foodLeft = (food / 1000).toFixed(2) 
    let hayLeft = (hay / 1000).toFixed(2)
    let coverLeft = (cover / 1000).toFixed(2)

    console.log(`Everything is fine! Puppy is happy! Food: ${foodLeft}, Hay: ${hayLeft}, Cover: ${coverLeft}.`)

}
guineaPig(["1",
    "1.5",
    "3",
    "1.5"
])