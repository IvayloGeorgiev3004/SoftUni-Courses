function ladyBugs(array){
    let fieldSize = array[0]
    let bugsStartPosition = array.slice(1,2)
    let bugsCommands = array.slice(2)
    for (let commands of bugsCommands){
        let newCommands = commands.split (" ")
      let startPosition = Number(newCommands[0])
      let moveDirection = newCommands[1]
      let endPosition = Number(newCommands[2])
        debugger
    }
  
    
    
}
ladyBugs([
3, '0 2',
'0 right 1',
'2 right 1'])

/* function testing (array) {
    let newArray = array[0].split("|")
    for (let rooms of newArray){
        let commands = rooms.split(" ")
            let command = commands[0]
            let value = Number(commands[1])
            
    }
    
    
}
testing(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]) */