function colorize() {
  let elements = document.querySelectorAll("tr");

  // Обхождане на всички елементи <tr> с помощта на цикъл
  for (let i = 0; i < elements.length; i++) {
    // Проверка дали индексът (i) е нечетен
    if (i % 2 !== 0) {
      // Ако индексът е нечетен, задаване на фонов цвят "teal" на текущия ред
      elements[i].style.background = "teal";
    }
  }
}
