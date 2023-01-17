function theSongOfTheWheels(input) {
    let controlNumber = Number(input[0]);
    let string = ``;
    let counter = 0;
    let password = 0;

    for (let a = 1; a <= 9; a++) {
        for (let b = 1; b <= 9; b++) {
            for (let c = 1; c <= 9; c++) {
                for (let d = 1; d <= 9; d++) {
                    if (a, b, c, d >= 1 && a, b, c, d <= 9) {
                        if (a < b) {
                            if (c > d) {
                                if ((a * b) + (c * d) === controlNumber) {
                                    counter++
                                    string += `${a}${b}${c}${d} `
                                    if (counter === 4) {
                                        password = `${a}${b}${c}${d}`
                                    }
                                }

                            }

                        }
                    }
                }
            }
        }

    }
    if (counter > 0) {
        console.log(`${string}`)
    }


    if (counter >= 4) {
        console.log(`Password: ${password}`)
    } else {
        console.log('No!')
    }

}
theSongOfTheWheels([110])