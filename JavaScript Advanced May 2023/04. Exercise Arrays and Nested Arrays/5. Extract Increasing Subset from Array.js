function findBiggestNumber(array) {
    // Инициализация на променливата, която ще пази текущия най-голям елемент
    let minElement = Number.MIN_SAFE_INTEGER;
    // Инициализация на празен масив, където ще запазим най-големите числа
    let finalArr = [];

    // Обхождаме входния масив
    for (let i = 0; i < array.length; i++) {
        // Проверка дали текущият елемент е по-голям или равен на текущия най-голям елемент
        if (minElement <= array[i]) {
            // Ако е по-голям или равен, присвояваме стойността му на minElement
            minElement = array[i];
            // Добавяме го към finalArr, защото това е един от най-големите елементи
            finalArr.push(minElement);
        }
    }

    // Връщаме масивът, съдържащ най-големите числа
    return finalArr;
}

console.log(findBiggestNumber([20, 3, 2, 15, 6, 1]));

