function sortNumbers(arrayOfNumbers) {
    // Инициализация на празен масив, в който ще съхраняваме сортираните числа
    let finalArray = [];

    // Сортиране на входния масив във възходящ ред (по-малки към по-големи числа)
    arrayOfNumbers.sort((a, b) => a - b);

    // Повтаряме докато arrayOfNumbers има елементи
    while (arrayOfNumbers.length > 0) {
        // Ако в arrayOfNumbers има само един елемент, добави го към finalArray
        if (arrayOfNumbers.length === 1) {
            let lastNum = arrayOfNumbers.pop();
            finalArray.push(lastNum);
        } else {
            // Извади най-големия елемент и най-малкия елемент
            let bigNum = arrayOfNumbers.pop();
            let smallNum = arrayOfNumbers.shift();
            // Добави най-малкия елемент, следван от най-големия, към finalArray
            finalArray.push(smallNum, bigNum);
        }
    }

    // Върни сортирания масив
    return finalArray;
}

// Извикване на функцията с входния масив и извеждане на резултата в конзолата
console.log(sortNumbers([0, 1, 3, 4, 5, 6, 7])); // Резултат: [0, 1, 3, 4, 5, 6, 7]