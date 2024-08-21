/* Break */
// console.log(`==== break ====`);
// for (let i = 0; i < 10; i++) {
//  if (i == 2) {
//   break;
//  }
//  console.log(`${i} 만큼 실행`);
// }

/* Continue */
// console.log(`\n=== continue ===`);
// for (let i = 0; i < 10; i++) {
//  if (i == 2) {
//   continue;
//  }
//  console.log(`${i} 만큼 실행`);
// }

/* Quiz - 홀수 출력하기 */
for (let num = 0; num < 10; num++) {
 if (num % 2 == 0) {
  continue;
 }
 console.log(num);
}
