function search() {
    let listOfTowns = document.getElementById("towns").children;
    let searchInput = document.getElementById("searchText").value;

    let matchCounter = 0;

    let listOfTownsArr = Array.from(listOfTowns);

    for (let currentLiElement of listOfTownsArr) {
        let currentTown = currentLiElement.textContent;
        if (currentTown.includes(searchInput)) {
            matchCounter++;
            let style = currentLiElement.style;
            style.textDecoration = "underline";
            style.fontWeight = "bold";
        }
    }
    document.getElementById("result").textContent = `${matchCounter} matches found`;
}
