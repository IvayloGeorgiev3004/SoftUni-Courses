function projects(input){
    let name = input[0];
    let projects = Number(input[1])
    let res = input[1] *3
    console.log(`The architect ${name} will need ${res} hours to complete ${projects} project/s.`)
}
projects(["George ","4 "])

function projectsG(input){
    let name = input[0];
    let hours = Number(input[1]) * 3;
    let res = (`The architect ${name} will need ${hours} hours to complete ${input[1]} project/s.`);
    console.log(res);
}
projectsG(["George ","4 "]);