/* for */
// for (let i = 0; i < 5; i++) {
//  console.clear();
//  console.log(i);
// }

/* 중첩 for */
// 중첩 시 내부, 외부 코드가 곱절만큼 실행되기 때문에 조심하기
// console.clear();
// for (let i = 0; i < 10; i++) {
//  for (let j = 0; j < 10; j++) {
//   console.log(i, j);
//  }
// }

/* Quiz - 구구단 */
console.clear();
for (let i = 2; i < 10; i++) {
 console.log(`=== ${i}단 ===`);
 for (let j = 1; j < 10; j++) {
  console.log(`${i} * ${j} = ${i * j}`);
 }
}
