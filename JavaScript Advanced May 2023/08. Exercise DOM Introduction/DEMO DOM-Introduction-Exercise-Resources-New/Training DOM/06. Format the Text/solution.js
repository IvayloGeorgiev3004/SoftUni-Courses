function solve() {
    let input = document.getElementById("input").value;
    let regex = /[.]+[ ]+/g;
    let matches = input.match(regex)
    let sentences = matches.length + 1;

    let finalOutput = ""
    if (sentences <=3){
      finalOutput = `<p>${input}</p>`
    }


    document.getElementById("output").innerHTML = finalOutput
}
