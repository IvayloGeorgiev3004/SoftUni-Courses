function solve() {
  //  Get the needed elements and their values
  let text = document.getElementById("text").value;
  let convention = document.getElementById("naming-convention").value;
  document.getElementById("result").textContent;

  //Check the convention and change the target HTML element text content
  if (convention !== "Camel Case" && convention !== "Pascal Case") {
    document.getElementById("result").textContent = "Error!";
  } else if (convention === "Camel Case") {
    document.getElementById("result").textContent = textToCamelCase(text);
  } else if (convention === "Pascal Case") {
    document.getElementById("result").textContent = textToPascalCase(text);
  }

  // function to convert text to camelCase text
  function textToCamelCase(text) {
    let camelCaseText = [];
    text = text.toLowerCase();
    let index = 0;
    while (index < text.length) {
      let currentChar = text[index];
      if (currentChar === " ") {
        index++;
        currentChar = text[index].toUpperCase();
        camelCaseText.push(currentChar);
        index++;
      } else {
        camelCaseText.push(currentChar);
        index++;
      }
    }
    return camelCaseText.join("");
  }

  // function to convert text to PascalCase text

  function textToPascalCase(text) {
    text = text.toLowerCase();
    let result = text[0].toUpperCase();
    let index = 1;
    while (index < text.length) {
      let currentChar = text[index];
      if (currentChar !== " ") {
        result += currentChar;
        index++;
      } else {
        index++;
        currentChar = text[index].toUpperCase();
        result += currentChar;
        index++;
      }
    }
    return result;
  }
}

// secOND eXamPLE iMA naDQVAM SE
// Pascal Case
