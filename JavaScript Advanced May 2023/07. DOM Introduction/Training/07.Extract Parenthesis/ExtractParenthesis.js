function extract(content) {
  let text = document.getElementById(content).textContent;
  let wordsArr = [];
  let word = "";
  for (let i = 0; i < text.length; i++) {
    if (text[i] === "(") {
      while (text[i] !== ")") {
        word += text[++i];
      }
      word = word.slice(0, -1);
      wordsArr.push(word);
      word = "";
    }
  }
  return wordsArr.join("; ");
}