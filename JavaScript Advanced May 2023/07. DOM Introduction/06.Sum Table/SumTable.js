function sumTable() {
  let tags = document.getElementsByTagName("td");
  let sum = 0;
  for (let i = 1; i < tags.length; i += 2) {
    let currValue = tags[i].textContent;
    currValue = Number(currValue);
    sum += currValue;
  }
  tags[tags.length - 1].textContent = sum;
}
