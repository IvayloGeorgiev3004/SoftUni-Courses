function extractText() {
  let element = document.getElementsByTagName("li");
  let arrayFromElement = Array.from(element)
    .map((x) => x.textContent)
    .join("\n");
  let area = document.getElementById("result");
  area.textContent = arrayFromElement;
}
