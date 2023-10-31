function factory(library, orders) {
    let finalOrdersArray = new Array();

    for (let order of orders) {
        let newObj = Object.assign({}, order.template);
        for (let object of order.parts) {
            newObj[object] = library[object];
        }

        finalOrdersArray.push(newObj);
    }
    return finalOrdersArray;
}

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
    login: function (username , password) {
        console.log(`${this.name} is entering its ${username} ${password} in`);
    },
};
const orders = [
    {
        template: { name: "ACME Printer" },
        parts: ["print"],
    },
    {
        template: { name: "Initech Scanner" },
        parts: ["scan", "login"],
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
const products = factory(library, orders);
console.table(products);
