"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let D = Math.pow(b, 2) - 4 * a * c;
	if (D < 0) {
		arr = [];
	} else if (D === 0) {
		arr[0] = -b / (2 * a);
	} else if (D > 0) {
		arr[0] = (-b + Math.sqrt(D)) / (2 * a);
		arr[1] = (-b - Math.sqrt(D)) / (2 * a);
	}
	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let interestRate = parseInt(percent) / 100 / 12; //процентная ставка
	let initialFee = parseInt(contribution); //начальный взнос 
	let totalCost = parseInt(amount); //общая стоимость
	let creditTerm = parseInt(countMonths); // срок кредита
	let s = totalCost - initialFee; //тело кредита
	let pay = s * (interestRate + interestRate / (((1 + interestRate) ** creditTerm) - 1)); //ежемесячная оплата
	let totalAmount = +(pay * creditTerm).toFixed(2);
	console.log(totalAmount);


	return totalAmount;
}