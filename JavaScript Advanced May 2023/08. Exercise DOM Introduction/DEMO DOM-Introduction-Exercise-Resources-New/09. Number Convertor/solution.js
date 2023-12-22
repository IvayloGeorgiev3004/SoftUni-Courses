function solve() {
    // Get the select element
    const selectMenuTo = document.getElementById("selectMenuTo");

    // Clear existing options
    selectMenuTo.innerHTML = '';

    // Create new options
    const binaryOption = document.createElement("option");
    binaryOption.value = "binary";
    binaryOption.text = "Binary";

    const hexadecimalOption = document.createElement("option");
    hexadecimalOption.value = "hexadecimal";
    hexadecimalOption.text = "Hexadecimal";

    // Append options to the select element
    selectMenuTo.appendChild(binaryOption);
    selectMenuTo.appendChild(hexadecimalOption);
}
