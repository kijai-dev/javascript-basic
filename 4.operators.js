/* 단항 연산자 */
// let num1 = 5;
// let num2 = 3;

// console.log(-num1, num1 + num2, num1 - num2, num1 * num2, num1 / num2, num1 % num2);

/* 비교 연산자 */
// console.log(123 == 123);
// console.log(123 == "123");
// console.log(123 === "123");
// console.log(123 === 123);

// console.log(123 != 123);
// console.log(123 != "123");
// console.log("123 !== '123'" + 123 !== "123");
// console.log(123 !== 123);

/* 단항, 비교 연산자 심화 */
// let num1 = 5;
// let num2 = 3;
// let num3 = 2;

// console.log(num1 > num2 && num2 > num3);
// console.log(num1 == num2 && num1 > num2);
// console.log(num1 == num2 || num1 > num2);

// console.log(num1 - num2 > num2 - num3 && num2 == 0);
// console.log(num1 + num2 > num3 || num3 > 0);

/* 대입 연산자 */
// let num = 0;
// num++;
// num--;

// num = 1;
// console.log("전치 : ", num++);

// num = 1;
// console.log("후치 : ", ++num);

// let num1 = num++;
// console.log(num1);
// console.log(num);

/* 삼항 조건 연산자 */
// const age = 15;
// const result = age > 19 ? "성인" : "미성년자";

// console.log(result);

/* 연산자 우선순위 */
let a = 2;
let b = 3;
let result = a + (b * 4) / 5;
console.log(result);

result = ((a + b) * 4) / 5;
console.log(result);

result = a++ + b * 4;
console.log(result);
console.log(a);

result = ++a + b * 4;
console.log(result);
console.log(a);
