/* if ~ else */
// const adult = 19;
// let age = 20;

// if (age < adult) {
//  console.log("미성년자");
// } else {
//  console.log("성인");
// }

/* 중첩 if */
// let gender = "male";

// if (age < adult) {
//  if (gender == "male") {
//   console.log("미성년 남자");
//  } else {
//   console.log("미성년 여자");
//  }
// } else {
//  console.log("성인");
// }

/* 다중 if */
// const browser = "Chrome";
// let browserName;

// if (browser == "IE") {
//  browserName = "인터넷 익스플로러";
// } else if (browser == "Safari") {
//  browserName = "사파리";
// } else if (browser == "Chrome") {
//  browserName = "크롬";
// } else {
//  browserName = "기타 브라우저";
// }

// console.log(`브라우저는 ${browserName}입니다.`);

/* Quiz - 학점 구하기 */
const score = 76;
let grade;

if (score > 89) {
 grade = "A";
} else if (score > 79) {
 grade = "B";
} else if (score > 69) {
 grade = "C";
} else if (score > 59) {
 grade = "D";
} else if (score > 49) {
 grade = "E";
} else {
 grade = "F";
}

console.log(`학점은 ${grade}입니다.`);
