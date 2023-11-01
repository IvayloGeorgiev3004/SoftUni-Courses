function fromJSONtoHTML(input) {
    let arrayOfObjects = JSON.parse(input);
    let outputResult = `<table>\n   <tr>`;
    for (let objKeys of Object.keys(arrayOfObjects[0])) {
        outputResult += `<th>${changeHTMLCharacters(objKeys.toString())}</th>`;
    }
    outputResult += "</tr>\n";

    for (let object of arrayOfObjects) {
        outputResult += "   <tr>";
        for (let value of Object.values(object)) {
            outputResult += `<td>${changeHTMLCharacters(
                value.toString()
            )}</td>`;
        }
        outputResult += "</tr>\n";
    }
    outputResult += "</table>";

    function changeHTMLCharacters(string) {
        let charsToChange = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "/": "&#x2F",
        };
        for (let char in charsToChange) {
            if (string.indexOf(char) === 0) {
                string = string.replaceAll(char, charsToChange[char]);
            }
        }
        return string;
    }

    console.log(outputResult);
}
fromJSONtoHTML(`[{"Name":"Stamat",
"Score":5.5},
{"Name":"Rumen",
"Score":6}]`);

fromJSONtoHTML(`[{"Name":"Pesho",
"Score":4,
"Grade":8},
{"Name":"Gosho",
"Score":5,
"Grade":8},
{"Name":"Angel",
"Score":5.50,
"Grade":10}]`);

function fromJSONtoHTML(input) {
    let arrayOfObjects = JSON.parse(input);
    console.log(`<table>`);

    let string = "<tr>";
    for (let objKeys of Object.keys(arrayOfObjects[0])) {
        let newString = `<th>${changeHTMLCharacters(objKeys.toString())}</th>`;
        string += newString;
    }
    console.log(`   ${string}</tr>`);

    for (let object of arrayOfObjects) {
        let string = "";

        for (let objValues of Object.values(object)) {
            let newString = `<td>${changeHTMLCharacters(
                objValues.toString()
            )}</td>`;
            string += newString;
        }
        console.log(`   <tr>${string}</tr>`);
    }

    function changeHTMLCharacters(string) {
        let charsToChange = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "/": "&#x2F",
        };
        return string.replace(/[&<>"'\/]/g, (s) => charsToChange[s]);
    }

    console.log(`</table>`);
}

fromJSONtoHTML(`[{"Name":"Pesho",
"Score":4,
"Grade":8},
{"Name":"Gosho",
"Score":5,
"Grade":8},
{"Name":"Angel",
"Score":5.50,
"Grade":10}]`);
