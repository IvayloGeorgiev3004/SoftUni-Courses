function solve() {
  let text = document.getElementById("text").value;
  let convention = document.getElementById("naming-convention").value;
  let result = "";

  if (convention === "Pascal Case") {
    document.getElementById("result").textContent = toPascalCase(text);
  } else if (convention === "Camel Case") {
    document.getElementById("result").textContent = toCamelCase(text);
  } else {
    document.getElementById("result").textContent = "Error!";
  }

  function toPascalCase(text) {
    text = text.toLowerCase();
    let upperCaseTrigger = false;
    let pascalCase = text[0].toUpperCase();
    for (let i = 1; i < text.length; i++) {
      if (text[i] !== " ") {
        if (upperCaseTrigger === true) {
          let firstLetter = text[i].toUpperCase();
          pascalCase += firstLetter;
          upperCaseTrigger = false;
        } else {
          pascalCase += text[i];
        }
      } else {
        upperCaseTrigger = true;
      }
    }
    return pascalCase;
  }

  function toCamelCase(text) {
    text = text.toLowerCase();
    let upperCaseTrigger = false;
    let camelCase = text[0];
    for (let i = 1; i < text.length; i++) {
      if (text[i] !== " ") {
        if (upperCaseTrigger === true) {
          let firstLetter = text[i].toUpperCase();
          camelCase += firstLetter;
          upperCaseTrigger = false;
        } else {
          camelCase += text[i];
        }
      } else {
        upperCaseTrigger = true;
      }
    }
    return camelCase;
  }
}
