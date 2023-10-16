function sortArray(arrayOfStrings) {
    // Използваме метода .sort() за сортиране на масива от низове
    let sortedArray = arrayOfStrings.sort((a, b) => {
        // Първоначално сравняваме низовете по дължина
        if (a.length > b.length) {
            return 1; // Ако a е по-дълъг от b, връщаме положително число, за да го местим по-надолу в масива
        } else if (a.length < b.length) {
            return -1; // Ако b е по-дълъг от a, връщаме отрицателно число, за да го местим по-нагоре в масива
        } else {
            // Ако низовете имат еднаква дължина, използваме .localeCompare() за лексикографско сравнение
            return a.localeCompare(b); // Връщаме резултата от сравнението на a и b
        }
    });

    // Преобразуваме сортирания масив в низ, като всяка стойност се изпечатва на нов ред
    console.log(sortedArray.join(`\n`));
}

sortArray(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);