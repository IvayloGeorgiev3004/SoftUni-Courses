function toggle() {
    // Вземане на първия елемент с клас "button" от документа
    let button = document.getElementsByClassName("button")[0];

    // Вземане на стиловете на елемента с id "extra"
    let pStyle = document.getElementById("extra").style;

    // Проверка дали текстът на бутона е "More"
    if (button.textContent === "More") { 
        // Ако е "More", сменяме го на "Less" и показваме скритият текст
        button.textContent = "Less";
        pStyle.display = "block";
    } else {
        // В противен случай сменяме го на "More" и скриваме текста
        button.textContent = "More";
        pStyle.display = "none";
    }
}
