function solve() {
    let input = document.getElementById("input").value;
    let sentences = input.split(".");
    sentences.pop();

    let finalOutput = "";
    let arrayWithOutput = [];
    let sentenceCounter = 0;
    if (sentences.length <= 3) {
        finalOutput = `<p>${input}</p>`;
        return (document.getElementById("output").innerHTML = finalOutput);
    } else if (sentences.length > 3) {
        let index = 0;
        while (index <= sentences.length - 1) {
            let currentSentence = sentences[index] + ".";
            finalOutput += currentSentence;
            sentenceCounter++;
            if (sentenceCounter === 3) {
                finalOutput = `<p>${finalOutput}</p>`;
                arrayWithOutput.push(finalOutput);
                finalOutput = "";
                sentenceCounter = 0;
            }
            index++;
        }
    }

    if (sentenceCounter !== 0) {
        finalOutput = `<p>${finalOutput}</p>`;
        arrayWithOutput.push(finalOutput);
    }
    let finalResult = "";
    for (let i = 0; i < arrayWithOutput.length; i++) {
        finalResult += arrayWithOutput[i];
    }
    document.getElementById("output").innerHTML = finalResult;
}


function solve() {
  let input = document.getElementById("input").value;
  let sentences = input.split(".");
  sentences.pop(); // Remove the empty string at the end

  let paragraphs = [];

  while (sentences.length > 0) {
      let currentParagraph = sentences.splice(0, 3).join(".") + ".";
      paragraphs.push(`<p>${currentParagraph}</p>`);
  }

  let finalResult = paragraphs.join("");
  document.getElementById("output").innerHTML = finalResult;
}

