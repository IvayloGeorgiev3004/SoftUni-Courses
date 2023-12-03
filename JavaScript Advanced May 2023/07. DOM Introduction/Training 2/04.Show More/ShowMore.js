function showText() {
    let elementStyle = document.getElementById("more").style  //get the style of the element using method.style
    elementStyle.display = "none"  // change the style

    let elementToShoStyle = document.getElementById("text").style //get the style of the element using method.style
    elementToShoStyle.display = "inline" // change the style
}