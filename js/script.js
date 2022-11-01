//minimum
// task 2 
//Створи функцію, яка буде виводити кількість переданих їй аргументів.

function countArguments() {
    console.log(arguments.length);
}
countArguments(213, "ae", "js", "17701");

// task 3
// Напиши функцію, яка приймає 2 числа і повертає :
// 1. -1, якщо перше число менше, ніж друге;
// 2. 1 - якщо перше число більше, ніж друге;
// 3. 0 - якщо числа рівні.
// 

function comparison(num1, num2) {
    if (num1 < num2) {
        console.log(-1);
    }
    else if (num1 > num2) {
        console.log(1);
    }
    else if (num1 = num2) {
        console.log(0);
    }
}
comparison(1, 2);

//task 4
//Напиши функцію, яка обчислює факторіал переданого їй числа.

function factorial(n) {
    let result = 1;
    if (n == 0 | n == 1) {
        return result;
    }
    else {
        for (let i = 1; i <= n; i++) {
            result = result * i;
        }
        return result;
    }
}
result = factorial(5);
console.log(result);

//task 5
//Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. Наприклад: цифри 1, 4, 9 перетворяться в число 149.

function unite(a, b, c) {
    console.log(a.toString() + b.toString() + c.toString());
}
unite(1, 4, 9);

// task 6
/*Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу.
Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.*/

function area(width, height) {
    if (width === undefined || height === undefined) {
        console.log(height ** 2);
        console.log(width ** 2);
    }
    else if (width === undefined && height === undefined) {
        console.log("dang")
    }
    else {
        return width * height;
    }
}
let answer = area(undefined, 12);
console.log(answer);

//normal
//task 1
/* Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”. 
Досконале число - це число, яке дорівнює сумі всіх своїх дільників.*/
function isPerfectNumber(n) {
    let result = 0;
    for (let i = 1; n > i; i++) {
        if (n % i == 0) {
            //console.log(i);
            result = result + i;

            //console.log(result);
            continue;
        }

    }
    if (result > n) {
        console.log(`${result} не є досконалим числом`);
    }
    else {
        console.log(`${result}  є досконалим числом`);
    }

}

isPerfectNumber(28);
