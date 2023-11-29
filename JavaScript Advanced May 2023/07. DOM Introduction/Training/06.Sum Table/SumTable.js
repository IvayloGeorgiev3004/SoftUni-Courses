function sumTable() {
  // Получаване на всички елементи <td> в таблицата
  let elements = document.getElementsByTagName("td");

  // Инициализация на променливи за индекс и обща сума
  let index = 0;
  let sum = 0;

  // Използване на цикъл while за обхождане на елементите <td>
  while (index < elements.length - 1) {
    // Проверка дали индексът (index) е нечетен
    if (index % 2 !== 0) {
      // Ако индексът е нечетен, добавяне на стойността на текущия елемент <td> към сумата
      sum += Number(elements[index].textContent);
    }
    // Увеличаване на индекса
    index++;
  }

  // Задаване на сумата като текстово съдържание на последния елемент <td>
  elements[elements.length - 1].textContent = sum;
}
