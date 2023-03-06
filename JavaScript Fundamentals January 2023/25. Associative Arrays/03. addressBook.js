function addressBook(array) {
    let addressBookObj = {}

    array.forEach(element => {
        let [name, address] = element.split(":")
        addressBookObj[name] = address;
    });

    let sorted = Object.entries(addressBookObj).sort((a, b) => a[0].localeCompare(b[0]))
    
}
addressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd'])