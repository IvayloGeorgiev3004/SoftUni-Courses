function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);

  function onClick() {
    let input = document.getElementById("searchField").value;
    let tableRows = document.querySelectorAll("tbody tr");

    for (let i = 0; i < tableRows.length; i++) {
      tableRows[i].style.background = "";
      tableRows[i].classList.remove("select");
      let currentText = tableRows[i].textContent;
      if (currentText.includes(input) && input !== "") {
        tableRows[i].classList.add("select");
      }
    }
  }
}
