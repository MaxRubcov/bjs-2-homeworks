function getArrayParams(...arr) {
	let min = Infinity;
	let max = -Infinity;
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i]
		}
		if (arr[i] < min) {
			min = arr[i]
		}
		sum += arr[i];
		avg = +(sum / arr.length).toFixed(2);
	}

	return {
		min: min,
		max: max,
		avg: avg
	};
}


function summElementsWorker(...arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] !== undefined) {
			sum += arr[i];
		} else {
			return 0;
		}
	}
	return sum;
}
console.log(summElementsWorker()); // 0
console.log(summElementsWorker(10, 10, 11, 20, 10)); // 61

function differenceMaxMinWorker(...arr) {
	let min = Infinity;
	let max = -Infinity;
	let difference = 0;
	for (i = 0; i < arr.length; i++) {
		if (arr === undefined || arr === NaN || arr === -Infinity) {
			return 0;
		}
		if (arr[i] < min)
			min = arr[i];

		if (arr[i] > max)
			max = arr[i];
		difference = max - min;
	}
	return difference;
}
console.log(differenceMaxMinWorker()); // 0
console.log(differenceMaxMinWorker(10, 10, 11, 20, 10)); // 20 - 10 => 10

function differenceEvenOddWorker(...arr) {
	let sumEvenElement = 0;
	let sumOddElement = 0;
	for (i = 0; i < arr.length; i++) {
		if (arr[i] !== undefined) {
			if (arr[i] % 2 == 0) {
				sumEvenElement += arr[i];
			} else {
				sumOddElement += arr[i];
			}
		} else {
			return 0;
		}
	}
	return sumEvenElement - sumOddElement;
}
console.log(differenceEvenOddWorker(94, 51, 57, 41, 47, 66, 58, 10, 38, 17)); // 266 - 213 => 53
console.log(differenceEvenOddWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35)); // 114 - 383 => -269

function averageEvenElementsWorker(...arr) {
	sumEvenElement = 0;
	countEvenElement = 0;
	for (i = 0; i < arr.length; i++) {
		if (arr[i] !== undefined || arr[i] !== NaN) {
			if (arr[i] % 2 == 0) {
				sumEvenElement += arr[i];
				countEvenElement++;
			}
		}
	}
	if (sumEvenElement === 0 || countEvenElement === 0) {
		return 0;
	}

	return sumEvenElement / countEvenElement;
}
console.log(averageEvenElementsWorker(1, 2, 3, 4, 5, 6, 7, 8, 9)); // [2, 4, 6, 8] => 5
console.log(averageEvenElementsWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35)); // [64, 10, 40] => 38

function makeWork(arrOfArr, func) {
	let maxWorkResult = func(...arr[0]);

	for (let i = 0; i < arrOfArr.length; i++) {
		let max = func(...arrOfArr[i]);
		if (maxWorkResult < max) {
			maxWorkResult = max;
		}
	}
	return maxWorkResult;
}
const arr = [
	[10, 10, 11, 20, 10],
	[67, 10, 2, 39, 88],
	[72, 75, 51, 87, 43],
	[30, 41, 55, 96, 62]
];
console.log(makeWork(arr, summElementsWorker)); // максимум из 61, 206, 328, 284 => 328
console.log(makeWork(arr, differenceMaxMinWorker)); // максимум из 10, 86, 44, 66 => 86
console.log(makeWork(arr, differenceEvenOddWorker)); // максимум из 39, -6, -184, 92 => 92
console.log(makeWork(arr, averageEvenElementsWorker)); // максимум из 12.5, 33.333, 72, 62.666 => 72