function sortByTwoCriteria(arrayOfStrings) {
    arrayOfStrings.sort((firstEl, secondEl) => {
        if (firstEl.length > secondEl.length) {
            return 1;
        } else if (firstEl.length < secondEl.length) {
            return -1;
        } else {
            return firstEl.localeCompare(secondEl); // Сравняваме низовете лексикографски
        }
    });

    console.log(arrayOfStrings.join("\n"));
}

sortByTwoCriteria(['Isacc',
    'Theodor', 'Jack',
    'Harrison',
    'George'])

function sortByTwoCriteria2(arrayOfStrings) {
    arrayOfStrings.sort((firstEl, secondEl) => {
        const lengths = firstEl.length - secondEl.length;
        if (lengths !== 0) {
            return lengths;
        }
        return firstEl.localeCompare(secondEl);
    });
    console.log(arrayOfStrings.join("\n"));
}
sortByTwoCriteria2(['Isacc',
    'Theodor', 'Jack',
    'Harrison',
    'George'])


// BULGARIAN EXPLANATION

function сортирайПоДваКритерия(масивОтНизове) {
    масивОтНизове.sort((първиЕлемент, вториЕлемент) => {
        // Сравнение по дължина на низовете
        if (първиЕлемент.length > вториЕлемент.length) {
            return 1; // Ако първият низ е по-дълъг, връщаме положително число
        } else if (първиЕлемент.length < вториЕлемент.length) {
            return -1; // Ако вторият низ е по-дълъг, връщаме отрицателно число
        } else {
            // Ако низовете имат еднаква дължина, сравняваме ги лексикографски (по азбучен ред)
            const сравнение = първиЕлемент.localeCompare(вториЕлемент);
            return сравнение;
        }
    });
    console.log(масивОтНизове.join("\n"));
}
