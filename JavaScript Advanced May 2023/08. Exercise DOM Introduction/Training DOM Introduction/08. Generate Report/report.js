function generateReport() {
    // const checkedElements = document.querySelectorAll('input[type="checkbox"]:checked')

    let tableHeaders = document.querySelectorAll("thead tr th");
    let tableColumns = document.querySelectorAll("tbody tr");

    let clickedHeaders = [];

    for (let tableHead of tableHeaders) {
        if (tableHead.firstElementChild.checked === true) {
            clickedHeaders.push(tableHead);
        }
    }

    let finalResult = [];
    for (let column of tableColumns) {
        let finalObj = {};
        for (let clicked of clickedHeaders) {
            let neededIndex = clicked.cellIndex;
            let header = clicked.firstElementChild.name
            let value = column.cells[neededIndex].textContent;
            finalObj[header] = value;
        }
        finalResult.push(finalObj);
    }
    let result = JSON.stringify(finalResult, null, 2);
    document.getElementById("output").value = result;
}
