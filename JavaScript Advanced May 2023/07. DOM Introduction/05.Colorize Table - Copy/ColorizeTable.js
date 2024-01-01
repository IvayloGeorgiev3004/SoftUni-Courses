function colorize() {
    let elements = document.querySelectorAll("tr");

    let length = elements.length;
    let index = 0;

    while (index < length) {
        let currentElement = elements[index];
        if (index % 2 !== 0) {
            currentElement.style.backgroundColor = "teal";
        }
        index++;
    }
}
