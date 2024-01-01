function sumTable() {
    let elements = document.querySelectorAll("td");
    let finalResult = document.getElementById("sum");
    let sum = 0;

    for (let i = 0; i < elements.length; i++) {
        if (i === 1 || i == 3 || i === 5) {
            let currentValue = elements[i].textContent;
            currentValue = Number(currentValue);
            sum += currentValue;
        }
    }

    finalResult.textContent = sum;
}
