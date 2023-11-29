function showText() {
    // Извличане на елемента с идентификатор "more"
    let element = document.getElementById("more");
  
    // Получаване на стиловете на елемента
    let elementStyle = element.style;
  
    // Задаване на стил "display: none", скриване на елемента
    elementStyle.display = "none";
  
    // Извличане на елемента с идентификатор "text"
    let replacerElement = document.getElementById("text");
  
    // Получаване на стиловете на елемента
    let replacerElementStyle = replacerElement.style;
  
    // Задаване на стил "display: inline", показване на елемента
    replacerElementStyle.display = "inline";
  
    // Отстъпче, което позволява използването на debugger във VS Code
    debugger;
  }
