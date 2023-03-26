function secretChat(array) {
    let message = array.shift();
    let index = 0;
    let lines = array[index]

    while (lines !== "Reveal") {
        let command = lines.split(":|:").shift();
        switch (command) {
            case "ChangeAll":
                let toReplace = lines.split(":|:")[1];
                let replaceWith = lines.split(":|:")[2];
                while (message.indexOf(toReplace) !== -1) {
                    message = message.replace(toReplace, replaceWith)
                }
                console.log(message)
                break;
            case "Reverse":
                let word = lines.split(":|:")[1];
                if (message.indexOf(word) !== -1) {
                    wordCutAndReverse(word);
                    console.log(message);

                } else {
                    console.log("error");
                }
                break;
            case "InsertSpace":
                let index = Number(lines.split(":|:")[1]);
                message = message.substring(0, index) + " " + message.substring(index, message.length);
                console.log(message);
                break;
        }
        index++
        lines = array[index]
    }
    console.log(`You have a new text message: ${message}`)

    function wordCutAndReverse(someWord) {
        message = message.replace(someWord, "")
        let reversed = Array.from(someWord).reverse().join("");
        message = message + reversed;
    }
}
secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
])