function solve() {
  // Get the input value from the HTML input element with the id "input"
  let textInput = document.getElementById("input").value;

  // Split the input text into an array of sentences using the period as the delimiter
  let splittedText = textInput.split(".");

  // Initialize an array to store valid non-empty sentences
  let validSentencesArray = [];

  // Iterate through each sentence in the splittedText array
  for (let sentence of splittedText) {
    // Check if the sentence is not empty or not just a space
    if (sentence !== "" && sentence !== " ") {
      // Add the valid sentence to the validSentencesArray array
      validSentencesArray.push(sentence);
    }
  }

  // Initialize an array to store paragraphs
  let paragraphsArr = [];

  // Initialize a variable to store the current paragraph text
  let paragraphText = "";

  // Initialize a counter to keep track of sentences in the current paragraph
  let counter = 0;

  // Iterate through each sentence in the validSentencesArray array
  for (let i = 0; i < validSentencesArray.length; i++) {
    // Concatenate the current sentence to the paragraphText with a period
    paragraphText += validSentencesArray[i] + ".";

    // Increment the counter
    counter++;

    // Check if the counter reaches 3, indicating three sentences in the current paragraph
    if (counter === 3) {
      // Push the current paragraphText wrapped in <p> tags to the paragraphsArr array
      paragraphsArr.push(`<p>${paragraphText}</p>`);

      // Reset the counter and paragraphText for the next paragraph
      counter = 0;
      paragraphText = "";
    }
  }

  // Check if there are remaining sentences to form a partial paragraph
  if (counter !== 0) {
    // Push the remaining paragraphText wrapped in <p> tags to the paragraphsArr array
    paragraphsArr.push(`<p>${paragraphText}</p>`);
  }

  // Set the innerHTML of the HTML element with the id "output" to the joined paragraphsArr
  document.getElementById("output").innerHTML = paragraphsArr.join("");
}
