function listOfNames(arrayOfNames) {
    // Сортиране на масива в лексикографски (азбучен) ред
    // Функцията localeCompare се използва за сравняване на низове с участие на текущата локална настройка
    arrayOfNames.sort((name1, name2) => name1.localeCompare(name2));

    // Инициализация на променлива за номериране на имената
    let num = 1;

    // Обхождане на сортирания масив от имена
    for (let name of arrayOfNames) {
        // Форматиране на името с добавяне на пореден номер и точка пред имената
        name = num + "." + name;
        // Увеличаване на номера за следващото име
        num++;
        // Извеждане на форматираното име в конзолата
        console.log(name);
    }
}

// Извикване на функцията с входния масив ["John", "Bob", "Christina", "Ema"]
listOfNames(["John", "Bob", "Christina", "Ema"]);

// Изход:
// 1.Bob
// 2.Christina
// 3.Ema
// 4.John