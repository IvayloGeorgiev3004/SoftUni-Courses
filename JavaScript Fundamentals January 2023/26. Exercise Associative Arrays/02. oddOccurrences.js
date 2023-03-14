function oddOccurrences(string) {
    let mapWords = new Map()
    let words = string.split(" ")

    words.forEach(element => {
        let counter = 1;
        element = element.toLocaleLowerCase()
        if (!mapWords.has(element)) {
            mapWords.set(element, counter)
        } else {
            counter = mapWords.get(element)
            counter++
            mapWords.set(element, counter)
        }
    });

    let finalResult = ""
    let arrayOfMap = [...mapWords.entries()]
    for (let i = 0; i < arrayOfMap.length; i++) {
        if (arrayOfMap[i][1] % 2 !== 0) {
            finalResult += `${arrayOfMap[i][0]}` + " "
        }

    }
    console.log(finalResult.trim())
}
oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food')