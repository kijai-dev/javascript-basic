/* Quiz - 1 ~ 46까지의 숫자 중 6개의 무작위 숫자를 추첨하기 */
/* set 만들기 -> set에 없을 경우 추가하기 -> set에 있을 경우 재추첨 -> 6개가 되면 중지 */
const max = 6;
let numSet = new Set([]);

while (true) {
 let random = Math.random();
 let num = Math.floor(random * 46) + 1;
 numSet.add(num);
 if (numSet.size >= 6) {
  break;
 }
}

console.log(numSet);
