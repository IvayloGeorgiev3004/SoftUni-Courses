function listOfNames(arrayOfNames) {
    arrayOfNames.sort((name1, name2) => name1.localeCompare(name2))
    let num = 1;

    for (let name of arrayOfNames) {
        name = num + "." + name
        num++
        console.log(name)
    }

}
listOfNames(["John",
    "Bob",
    "Christina",
    "Ema"])