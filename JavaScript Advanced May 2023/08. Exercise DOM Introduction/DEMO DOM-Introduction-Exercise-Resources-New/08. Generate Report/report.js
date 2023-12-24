function generateReport() {
    let checkedCheckboxes = document.querySelectorAll('thead input[type="checkbox"]:checked'); 
    let tableRows = document.querySelectorAll('tbody tr'); 
    let reportDataset = []; 
  
    for (let row of tableRows) {
      let rowData = {}; 
      for (let checkbox of checkedCheckboxes) {
        let headerName = checkbox.getAttribute('name'); 
        let columnIndex = checkbox.parentElement.cellIndex; 
        let cellContent = row.cells[columnIndex].textContent; 
        rowData[headerName] = cellContent; 
      }
      reportDataset.push(rowData); 
    }
  
    let finalReportJSON = JSON.stringify(reportDataset,null, 2); // add 2 spaces for better readability
    document.getElementById('output').value = finalReportJSON;
  }
