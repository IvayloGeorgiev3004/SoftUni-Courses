function toggle() {
    // GET BUTTON
    let button = document.querySelector(".button").textContent;

    // Change button textContent

    if (button === "More") {
        document.querySelector(".button").textContent = "Less";
        document.querySelector("#extra").style.display = "block";
        debugger;
    } else if (button === "Less") {
        document.querySelector(".button").textContent = "More";
        document.querySelector("#extra").style.display = "none";
    }
    debugger;
}
