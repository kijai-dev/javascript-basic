/* Swich */
// const browser = "Opera";
// let browserName;

// switch (browser) {
//  case "Chrome":
//   browserName = "크롬";
//   break;
//  case "IE":
//   browserName = "인터넷 익스플로러";
//   break;
//  case "Safari":
//   browserName = "사파리";
//   break;
//  case "Opera":
//   browserName = "오페라";
//   break;
//  case "FF":
//   browserName = "파이어폭스";
//   break;
//  default:
//   browserName = "기타 브라우저";
//   break;
// }

// console.log(`브라우저는 ${browserName}입니다.`);

/* Quiz - Switch로 학점 구하기 */
const score = 76;
let grade;

switch (true) {
 case score > 89:
  grade = "A";
  break;
 case score > 79:
  grade = "B";
  break;
 case score > 69:
  grade = "C";
  break;
 case score > 59:
  grade = "D";
  break;
 case score > 49:
  grade = "E";
  break;
 default:
  grade = "F";
}

console.log(`학점은 ${grade}입니다.`);
