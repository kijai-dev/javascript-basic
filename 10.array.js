/* Array */
// let numbers = [1, 2, 3, 4, 5];
// console.log(numbers[0]);

// for (let i = 0; i < numbers.length; i++) {
// console.log(numbers[i]);
// }
// console.log(numbers);

/* Array(n) - n개의 빈 아이템을 가진 Array 생성 */
// let array = new Array(2);
// console.log(array);

/* Array(n1, n2 ...) - n1, n2...을 값으로 갖는 Array 생성 */
// array = new Array(1, 2, 3, 4, 5);
// console.log(array);

/* Array item 교체 */
// numbers[3] = -4;
// console.log(numbers);

/* Array item 추가 1 */
// numbers[5] = 6;
// console.log(numbers);

/* Array item 삭제 - delete */
// delete numbers[3];
// console.log(numbers);

/* Array 활용 1 */
let bts1 = ["진", "슈가", "제이홉", "RM"];
let bts2 = ["지민", "뷔", "정국"];

// const person = "슈가";
// console.log(`${person}은(는) bts1의 ${bts1.indexOf(person) + 1}번째 멤버`);

/* Array Push 2 */
// bts1.push("차은우");
// console.log(bts1);

// bts1.unshift("이도현");
// console.log(bts1);

/* Array Shift & Pop - 상대위치를 이용한 삭제 & 반환 */
// let deleteFirst = bts1.shift();
// console.log(deleteFirst);
// console.log(bts1);

// let deleteLast = bts1.pop();
// console.log(deleteLast);
// console.log(bts1);

/* Array splice - 절대위치를 이용한 삭제 & 반환 */
// let deleteFirst = bts1.splice(0, 1);
// console.log(deleteFirst);
// console.log(bts1);

// console.log(bts1);
// let replace = bts1.splice(1, 3);
// console.log(replace);
// console.log(bts1);

/* Array slice - 절대위치를 사용해 새로운 배열 생성하기 */
// console.log(`bts1 = ${bts1}`);
// let bts3 = bts1.slice(0, 1);
// console.log(`bts1 = ${bts1}`);
// console.log(`bts3 = ${bts3}`);

/* Array concat - 배열 합치기 */
// const bts = bts1.concat(bts2);
// console.log(`bts = ${bts}`);

/* Array reverse - 배열 역순으로 정렬하기 */
// const bts = bts1.reverse();
// console.log(`bts = ${bts}`);

/* Quiz - Array 활용 실습 */
const list = ["슈가", "차은우", "박서준", "이도현", "제이홉", "주우재", "지민"];
const bts = ["진", "슈가", "제이홉", "RM", "지민", "뷔", "정국"];
let btsMembersSorted = [];

for (let i = 0; i < list.length; i++) {
 if (bts.includes(list[i])) {
  btsMembersSorted.push(list[i]);
 }
}

console.log(btsMembersSorted.join(", "));
