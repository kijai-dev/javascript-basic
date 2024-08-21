/* While */
// const age = 0;

// while (age < 5) {
//  console.log(`${age}살`);
//  age += 1;
// }

/* 중첩 While */
// let age = 0;
// let num = 0;
// let numText;

// while (age < 5) {
//  while (num < 10) {
//   switch (num) {
//    case 1:
//     numText = "첫";
//    case 2:
//     numText = "두";
//    case 3:
//     numText = "세";
//    case 4:
//     numText = "네";
//    case 5:
//     numText = "다섯";
//    case 6:
//     numText = "여섯";
//    case 7:
//     numText = "일곱";
//    case 8:
//     numText = "여덟";
//    case 9:
//     numText = "아홉";
//    default:
//     numText = "열";
//   }
//   console.log(`${numText}번째 ${age}살`);
//   num += 1;
//  }
//  num = 0;
//  age += 1;
// }

/* Do ~ While */
let num = 0;

do {
 num += 1;
 console.log(num);
} while (num < 10);
