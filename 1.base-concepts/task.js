"use strict"
function solveEquation(a, b, c) {
   let arr = b ** 2 - 4 * a * c;
   if (arr < 0) {
      return [];
   } else if (arr === 0) {
      let root = -b / (2 * a);
      return [root];
   } else {
      let ferstRoot = (-b + Math.sqrt(arr)) / (2 * a);
      let secondRoot = (-b - Math.sqrt(arr)) / (2 * a);
      return [ferstRoot, secondRoot];
   }
}
function calculateTotalMortgage(percent, contribution, amount, countMonths) {
   if (
      typeof percent !== "number" ||
      typeof contribution !== "number" ||
      typeof amount !== "number" ||
      typeof countMonths !== "number"
   ) {
      return "Ошибка ввода. Все аргументы должны быть числами.";
   }
   let monthlyPercent = percent / 100 / 12;
   let creditBody = amount - contribution;
   let monthlyPayment = creditBody * (monthlyPercent + monthlyPercent / (Math.pow(1 + monthlyPercent, countMonths) - 1));
   let totalPayment = monthlyPayment * countMonths;

   let roundedTotalPayment = Math.round(totalPayment * 100) / 100;

   return roundedTotalPayment;
}