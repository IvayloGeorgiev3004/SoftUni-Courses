function projects2(input){
    let name = input[0];
    let projects = Number(input[1]);

    let totalTimeNeeded = projects *3
    
    console.log(`The architect ${name} will need ${totalTimeNeeded} hours to complete ${projects} project/s.`)

}
projects2(['George',"4"])
