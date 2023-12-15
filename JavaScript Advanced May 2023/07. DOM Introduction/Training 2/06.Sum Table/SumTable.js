function sumTable() {
  let allTds = document.querySelectorAll("td:nth-child(even)");
  let length = allTds.length - 1;
  let arrFromTdTag = Array.from(allTds).reduce((accumulator, currValue, currIndex) => {
    if (currIndex < length) {
      let currNumber = Number(currValue.textContent);
      return (accumulator += currNumber);
    } else {
      return (currValue.textContent = accumulator);
    }
  }, 0);
}
