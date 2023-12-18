function toggle() {
    // GET THE NEEDED ELEMENTS
    let button = document.querySelector(".button");
    let buttonText = button.textContent; // get the textContent for button
    let extraElement = document.getElementById("extra").style;

    if (buttonText === "More") {
        button.textContent = "Less"; // change the name of the button to "Less"
        showElement(extraElement);
    } else if (buttonText === "Less") {
        button.textContent = "More"; // change the name of the button to "More"
        hideElement(extraElement);
    }

    function showElement(elementStyle) {
        elementStyle.display = "block";
    }

    function hideElement(elementStyle) {
        elementStyle.display = "none";
    }
}
