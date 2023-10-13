// Дефиниране на функцията, която приема масив и брой въртения
function rotateArray(array, rotations) {
    // Итерираме rotations пъти
    for (let i = 0; i < rotations; i++) {
        // Изваждаме последния елемент от масива
        let lastElement = array.pop();
        // Поставяме последния елемент отпред на масива
        array.unshift(lastElement);
    }
    // Преобразуваме масива в текст и го извеждаме в конзолата
    console.log(array.join(" "));
}

// Извикване на функцията с входния масив ['1', '2', '3', '4'] и 2 въртения
rotateArray(['1', '2', '3', '4'], 2);
