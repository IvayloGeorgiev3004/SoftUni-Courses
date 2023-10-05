function findEvenPosition(arrOfStrings) {
    let finalResultsArr = []; // създаваме нов празен масив

    arrOfStrings.forEach((element, index) => {
        if (index % 2 === 0) {
            finalResultsArr.push(element);
        }
    });

    console.log(finalResultsArr.join(" "))
}
findEvenPosition(['20', '30', '40', '50', '60'])