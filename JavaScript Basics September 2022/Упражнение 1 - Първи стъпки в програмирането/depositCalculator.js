function depositCalculator(input){

let depositSum = Number(input[0]);
let depositMonths = Number(input[1]);
let annualInterestRate = Number(input[2]);

let finalDepositSum = depositSum + depositMonths * ((depositSum * annualInterestRate /100 ) /12 )
// сума = депозирана сума + срок на депозита * ((депозирана сума * годишен лихвен процент ) / 12)

let interest = depositSum * annualInterestRate /100
let oneMonthInterest = interest / 12;
let finalSum = depositSum + (depositMonths * oneMonthInterest);

console.log(finalSum);
console.log(finalDepositSum)


}
depositCalculator(["200","3","5.7"])