function createObjects(array) {
    let arrayFinal = [];
    let finalObj = new Object();
    for (let i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            let food = array[i];
            arrayFinal.push(food);
        } else {
            let calories = array[i];
            arrayFinal.push(calories);
        }
    }

    for (let i = 0; i < arrayFinal.length; i += 2) {
        finalObj[arrayFinal[i]] = Number(arrayFinal[i + 1]);
    }
    console.log(finalObj);
}
createObjects(["Yoghurt", "48", "Rise", "138", "Apple", "52"]);
createObjects(["Potato", "93", "Skyr", "63", "Cucumber", "18", "Milk", "42"]);

function createObjects(array) {
    let finalObj = new Object();
    for (let i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            finalObj[array[i]] = null;
        } else {
            finalObj[array[i - 1]] = Number(array[i]);
        }
    }
    console.log(finalObj);
}
createObjects(["Yoghurt", "48", "Rise", "138", "Apple", "52"]);
createObjects(["Potato", "93", "Skyr", "63", "Cucumber", "18", "Milk", "42"]);

function createObjects(array) {
    let finalObj = new Object();
    for (let i = 0; i < array.length; i += 2) {
        let key = array[i];
        let value = Number(array[i + 1]);
        finalObj[key] = value;
    }
    console.log(finalObj);
}
createObjects(["Yoghurt", "48", "Rise", "138", "Apple", "52"]);
createObjects(["Potato", "93", "Skyr", "63", "Cucumber", "18", "Milk", "42"]);
