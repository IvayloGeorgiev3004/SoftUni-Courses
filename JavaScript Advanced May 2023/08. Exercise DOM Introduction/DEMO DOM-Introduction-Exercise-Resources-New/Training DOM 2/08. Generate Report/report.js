function generateReport() {
    // Array to store selected column headers
    let selectedColumns = [];
    // Get all table headers
    let tableHeaders = document.querySelectorAll("thead th");
    // Get all table rows
    let tableRows = document.querySelectorAll("tbody tr");

    // Loop through table headers to find selected columns
    for (let header of tableHeaders) {
        if (header.firstElementChild.checked === true) {
            selectedColumns.push(header);
        }
    }

    // Array to store the final report data
    let reportData = [];

    // Loop through table rows to extract data for each row
    for (let row of tableRows) {
        let rowData = {};
        // Loop through selected columns to extract data for each column
        for (let column of selectedColumns) {
            let columnName = column.firstElementChild.name;
            let columnIndex = column.cellIndex;
            rowData[columnName] = row.cells[columnIndex].textContent;
        }
        // Add the extracted data for the current row to the report data array
        reportData.push(rowData);
    }

    // Convert the report data to JSON format with indentation for readability
    document.getElementById("output").value = JSON.stringify(reportData, null, 2);
}
