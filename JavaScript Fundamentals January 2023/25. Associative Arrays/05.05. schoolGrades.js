function schoolGrades(array) {
    let schoolGradesMap = new Map()

    for (let students of array) {
        let commands = students.split(" ")
        let name = commands.shift()
        let grades = commands.map(Number)
        if (!schoolGradesMap.has(name)) {
            schoolGradesMap.set(name, grades)
        } else {
            let currentStudentGrades = schoolGradesMap.get(name)
            grades.forEach(element => {
                currentStudentGrades.push(element)
            });
        }
    }
    let sortedGrades = [...schoolGradesMap.entries()]
    sortedGrades.sort(([name, gradesArray], [name2, gradesArray2]) => name.localeCompare(name2))

    for (let commands of sortedGrades) {
        let studentName = commands[0]
        let studentTotalGrades = commands[1].length
        let studentAverage = ((commands[1].reduce((grade, grade2) => grade + grade2, 0)) / studentTotalGrades).toFixed(2)
        console.log(`${studentName}: ${studentAverage}`)
    }

}
schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6'])