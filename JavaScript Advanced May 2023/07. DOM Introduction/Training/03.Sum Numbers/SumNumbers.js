function calc() {
// Извличане на стойностите на числата от полетата за въвеждане и преобразуването им в числа
let num1Value = Number(document.getElementById("num1").value);
let num2Value = Number(document.getElementById("num2").value);

// Сумиране на числата
let sum = num1Value + num2Value;

// Задаване на сумата като стойност на полето "sum"
document.getElementById("sum").value = sum;
}
