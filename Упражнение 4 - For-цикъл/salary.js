function salary(input){
    let openTabs = Number(input[0]);
    let salary = Number(input[1]);

    let fineCounter = 0;
    let salaryAfterFines = 0;
    let website = 0;

    for (i = 2; i < input.length; i++){
        website = input[i]
        switch(website){
            case "Facebook": fineCounter +=150; break;
            case "Instagram": fineCounter +=100; break;
            case "Reddit": fineCounter +=50; break;
        }
        salaryAfterFines = salary - fineCounter;
        if (salaryAfterFines <= 0){
            console.log('You have lost your salary.')
            break;
        } 

    }
  if( salaryAfterFines > 0){
    console.log(Math.floor(salaryAfterFines))
  }

}
salary(["3", "500", "Github.com", "Stackoverflow.com", "softuni.bg"])