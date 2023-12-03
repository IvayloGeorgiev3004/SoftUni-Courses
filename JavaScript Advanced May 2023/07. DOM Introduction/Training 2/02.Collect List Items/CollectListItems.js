function extractText() {
  let items = document.querySelectorAll("li");
  let finalResArr = []
  for (let item of items){
    let text = item.textContent;
    finalResArr.push(text)
  }
  let finalResult = finalResArr.join("\n")
  document.getElementById("result").textContent = finalResult
}
