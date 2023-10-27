function factory(library, orders) {
    // Initialize an empty array to store the final products
    let ordersArray = [];

    // Iterate through each order in the orders array
    for (const order of orders) {
        // Create a new object by copying the template from the current order
        let finalObject = Object.assign({}, order.template);
        // ^^^ Creates a new object to store the modified properties of the current order template

        // Iterate through each part in the current order
        for (command of order.parts) {
            // Add a property to the finalObject by using the part as the key
            // Assign the corresponding function from the library to the property
            finalObject[command] = library[command];
            // ^^^ Assigns the function from the library to the property of the finalObject
        }

        // Add the modified object (product) to the ordersArray
        ordersArray.push(finalObject);
        // ^^^ Pushes the finalObject representing the current product into the ordersArray
    }

    // Return the array containing the final products
    return ordersArray;
}

// Define a library object containing various functions
const library = {
    print: function () {
        console.log(`${this.name} is printing a page`);
    },
    scan: function () {
        console.log(`${this.name} is scanning a document`);
    },
    play: function (artist, track) {
        console.log(`${this.name} is playing '${track}' by ${artist}`);
    },
};

// Define an array of orders, where each order specifies a template and a list of parts
const orders = [
    {
        template: { name: "ACME Printer" },
        parts: ["print"],
    },
    {
        template: { name: "Initech Scanner" },
        parts: ["scan"],
    },
    {
        template: { name: "ComTron Copier" },
        parts: ["scan", "print"],
    },
    {
        template: { name: "BoomBox Stereo" },
        parts: ["play"],
    },
];

// Call the factory function with the library and orders as arguments
// Store the resulting products in the products variable
const products = factory(library, orders);

// Log the products to the console in a table format
console.table(products);
