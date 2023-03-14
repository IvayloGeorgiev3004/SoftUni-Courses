function companyUsers(array) {
    let companyInfo = new Map()

    array.forEach(element => {
        let [companyName, employeeId] = element.split(" -> ")
        let IdsSet = new Set()
        if (!companyInfo.has(companyName)) {
            companyInfo.set(companyName, IdsSet.add(employeeId))
        } else {
            let currentId = companyInfo.get(companyName)
            if (!currentId.has(employeeId)) {
                currentId.add(employeeId)
                companyInfo.set(companyName, currentId)
            }
        }
    });

    let sorted = Array.from(companyInfo).sort(([name, id], [name2, id2]) => {
        return name.localeCompare(name2)
    })
    sorted.forEach(element => {
        let name = element.shift();
        console.log(name)
        let id = element.shift();
        id.forEach(personId => {
            console.log(`-- ${personId}`)
        })

    })
}
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
    ])