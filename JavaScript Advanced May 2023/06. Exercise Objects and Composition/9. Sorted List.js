function createSortedList() {
    // Create an empty array to store numbers
    const listOfNumbers = [];

    // Return an object with methods and properties for managing the sorted list
    return {
        // Method to add a number to the list, sort the list, and return the sorted list
        add: function (number) {
            listOfNumbers.push(number); // Add the number to the list
            listOfNumbers.sort((a, b) => a - b); // Sort the list in ascending order
            return listOfNumbers; // Return the sorted list
        },

        // Method to get a number at a specific index from the list
        get: function (index) {
            if (index >= 0 && index < listOfNumbers.length) {
                return listOfNumbers[index]; // Return the number at the specified index
            } else {
                return undefined; // Return undefined if the index is out of bounds
            }
        },

        // Method to remove a number at a specific index from the list, and return the removed number
        remove: function (index) {
            if (index >= 0 && index < listOfNumbers.length) {
                return listOfNumbers.splice(index, 1)[0]; // Remove and return the number at the specified index
            } else {
                return undefined; // Return undefined if the index is out of bounds
            }
        },

        // Property (getter) to get the number of elements in the list
        get size() {
            return listOfNumbers.length; // Return the length of the list
        },
    };
}

// Create a sorted list using the createSortedList function
let list = createSortedList();

// Add numbers to the list and display the results
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); // Output: 6 (number at index 1 after sorting)
list.remove(0); // Remove the first number (5) from the list
console.log(list.size); // Output: 2 (number of elements in the list)
console.log(list.get(1)); // Output: 7 (number at index 1 after removing 5)
