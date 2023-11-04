function rectangle(width, height, color) {
    // Capitalize the first letter of the color string
    let upperCaseChar = color[0].toUpperCase();
    // Replace the first character of color with the capitalized character
    color = color.replace(color[0], upperCaseChar);

    // Create a rectangle object with width, height, color, and calcArea() method
    let rectangle = {
        width, // Assign width property
        height, // Assign height property
        color, // Assign color property
        // Define calcArea method to calculate the area of the rectangle
        calcArea() {
            return this.width * this.height; // Calculate area using width and height properties
        },
    };

    // Return the created rectangle object
    return rectangle;
}

// Call the rectangle function with width: 4, height: 5, and color: "red"
let rect = rectangle(4, 5, "red");

// Log the properties of the rect object and the result of calcArea() to the console
console.log(rect.width); // Output: 4
console.log(rect.height); // Output: 5
console.log(rect.color); // Output: Red (capitalized first letter)
console.log(rect.calcArea()); // Output: 20 (4 * 5)
