function extract(content) {
    let text = document.getElementById(content).textContent;
    let regex = /\(([\w\s]*\))/g;
    let result = text.match(regex).join("; ");
    let removeBracketsRegex = /[()]/g;
    let finalResult = result.replace(removeBracketsRegex, "");
    return finalResult
  }