function extractText() {
 // Извличане на децата (елементите li) на ul с идентификатор "items"
let elementsText = document.getElementById("items").children; 

// Преобразуване на колекцията от елементи в масив и извличане на текстовото съдържание на всеки елемент
let result = Array.from(elementsText).map((element) => element.textContent); 

// Обединяване на текстовите стойности в масива в един низ, като всяка стойност е на нов ред
result = result.join("\n"); 

// Задаване на текстовата стойност на textarea с идентификатор "result" с обединения низ
document.getElementById("result").textContent = result;
}

