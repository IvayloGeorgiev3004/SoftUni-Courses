function solve() {
   document.querySelector("#searchBtn").addEventListener("click", onClick);
 
   function onClick() {
     // Get the search input value from the "searchField" input element
     let searchInputValue = document.getElementById("searchField").value;
 
     // Get all table rows from the "tBody" table element
     let table = document.querySelectorAll("tBody tr");
 
     // Iterate through each table row
     for (let tableRow of table) {
       // Remove the "select" class from the current table row to deselect it
       tableRow.classList.remove("select");
 
       // Convert the current table row's child elements to an array
       let arrFromChildren = Array.from(tableRow.children);
 
       // Iterate through each child element of the current table row
       arrFromChildren.forEach((child) => {
         // Check if the child element's text content includes the search input value
         if (child.textContent.includes(searchInputValue)) {
           // Add the "select" class to the current table row to indicate a match
           tableRow.classList.add("select");
         }
       });
     }
   }
 }