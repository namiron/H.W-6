
//1. З клавіатури вводитяться числа поки не буде введено 0. Знайти суму чисел.

{
	let sumRandomNumbers = 0;

	let userRandomNumbers = 0;

	do {
		sumRandomNumbers += userRandomNumbers;
		userRandomNumbers = parseFloat(prompt('введіть число'));
	} while (userRandomNumbers !== 0);

	document.write(` Сумма додавання = ${sumRandomNumbers}`)
}

//2.З клавіатури вводитяться числа поки не буде введено 0. Знайти добуток чисел.
{
	let sumRandomNumbers = 1;

	let userRandomNumbers = 1;

	do {
		sumRandomNumbers *= userRandomNumbers;
		userRandomNumbers = parseFloat(prompt('введіть число'));
	} while (userRandomNumbers !== 0);

	document.write(` Сумма множення = ${sumRandomNumbers}`)
}
//3. З клавіатури вводиться початкове знчення суми. Поки сума є меншою за 100 додавати до неї числа, які вводяться з клавіатури.
{
	let initialAmount = parseInt(prompt("введіть початкову сумму"));

	let userNumbers = 0;

	do {
		initialAmount += userNumbers;
		userNumbers = parseFloat(prompt('введіть число'));
	} while (initialAmount !== 100);

	document.write(` Сумма множення = ${initialAmount}`)
}

//9.З клавіатури вводиться пароль (правильний пароль- 78). Поки пароль не вірний дати можливість користувачу повторно ввести його. 

let correctPassword = 78;
let sumAttempts;
let userAttempt;

do {
	userAttempt = parseInt(prompt('введіть пароль'))
} while (userAttempt !== correctPassword);
document.write('ВІТАЮ!')


//4.1. З клавіатури вводяться два числа N i M (N<M). Вивести а екран числа
{
	userN = parseFloat(prompt('введіть число'));
	userM = parseFloat(prompt('введіть число'));

	stop: while (userN < userM) {
		userN++
		userM--

		document.write(`${userN} --- ${userM} `)
		if (userN === userM) break stop

	}
}