function loadingBar(loadingNUmber) {
    let start = 0;
    let end = 100;
    let loadingBar = ""

    for (let i = start; i < end; i += 10) {
        if (i < loadingNUmber) {
            loadingBar += `%`;
        } else {
            loadingBar += "."
        }

    }

    if (loadingNUmber < 100) {
        console.log(`${loadingNUmber}% [${loadingBar}]`)
        console.log(`Still loading...`)
    } else {
        console.log(`100% Complete!`)
        console.log(`[${loadingBar}]`)
    }

}
loadingBar(0)