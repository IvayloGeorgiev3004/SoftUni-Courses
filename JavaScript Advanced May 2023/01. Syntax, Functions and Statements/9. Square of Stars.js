function squareOfStars(parameter) {
    let type = typeof parameter;

    if (type === "number") {
        for (let i = 0; i < parameter; i++) {
            let square = ""
            for (let j = 0; j < parameter; j++) {
                square += `* `
            }
            console.log(square)
        }
    } else {
        // for (let i = 0; i < 5; i++) {
        //     let square = ""
        //     for (let j = 0; j < 5; j++) {
        //         square += `* `
        //     }
        //     console.log(square)
        // }
        console.log(`* * * * *\n* * * * *\n* * * * *\n* * * * *\n* * * * *`)
    }

}
squareOfStars(3)