function depositCalculator2(input){
    let depositSum = Number(input[0]);
    let depositTime = Number(input[1]);
    let yearlyInterestRate = Number(input[2]);

    let interest = (depositSum * yearlyInterestRate)/100;
    let monthlyInterest = interest/12;
    let finalSum = depositSum + (depositTime * monthlyInterest);


    console.log(finalSum);

}
depositCalculator2(["200","3","5.7"])