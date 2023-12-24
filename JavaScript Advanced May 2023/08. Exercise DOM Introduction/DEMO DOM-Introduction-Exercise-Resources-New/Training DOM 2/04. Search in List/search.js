function search() {
    // GET THE NEEDED ELEMENTS
    let towns = document.querySelectorAll("#towns li");
    let searchText = document.getElementById("searchText").value;

    let counter = 0;

    for (let town of towns) {
        let townsTextContent = town.textContent.toLowerCase(); // change the textContent to LowerCase
        searchText = searchText.toLowerCase(); // change the input value search text to LowerCase
        if (townsTextContent.includes(searchText)) {
            counter++;
            town.style.textDecoration = "underline";
            town.style.fontWeight = "bold";
        }
    }
    document.getElementById("result").textContent = `${counter} matches found`;
}
