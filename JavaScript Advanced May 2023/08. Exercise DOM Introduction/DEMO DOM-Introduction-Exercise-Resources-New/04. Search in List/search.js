function search() {
  let townsList = document.querySelectorAll("li");
  let input = document.getElementById("searchText").value;
  let counter = 0;

  for (let town of townsList) {
    let currentTown = town.textContent;
    town.style.fontWeight = "";
    town.style.textDecoration = "";
    if (currentTown.includes(input)) {
      counter++;
      town.style.fontWeight = "bold";
      town.style.textDecoration = "unederline";
    }

    document.getElementById("result").textContent = `${counter} matches found`;
  }
}
