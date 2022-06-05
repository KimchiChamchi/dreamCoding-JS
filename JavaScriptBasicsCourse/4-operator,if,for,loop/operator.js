/* 1. String concatenation */
console.log("my" + " cat");
console.log("1" + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);

/* 2. Numeric operators */
console.log(1 + 1); // add 더하기
console.log(1 - 1); // substract 빼기
console.log(1 / 1); // divide 나누기
console.log(1 * 1); // multiply 곱하기
console.log(1 % 1); // remainder 나누고 남은 나머지
console.log(2 ** 3); // exponentiation 제곱

/* 3. Increment and decrement operators */
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;
// preIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);
const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);
const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);

/* 4. Assignment operators */
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;

/* 5. Comparison operators */
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than or equal
console.log(10 >= 6); // greater than or equal

/* 6. Logical operators: || (or), && (and), ! (not) */
const value1 = true;
const value2 = 4 < 2;
function check() {
  for (let i = 0; i < 10; i++) {
    // wasting time
    console.log("😉");
  }
  return true;
}

// || (or), finds the first truthy value
// 순서대로 boolean 값을 확인하고 true가 확인됐으면
// 뒤의 값들은 확인하지 않고 넘어가기 때문에
// check함수가 실행되지 않는다
console.log(`or: ${value1 || value2 || check()}`);
// 따라서 check함수와 같이 연산을 더 많이 하게 되는 녀석이 있다면
// 뒤로 배치해서 가능한 연산을 줄이도록 하면 좋다

// && (and), finds the first falsy value
console.log(`and: ${value1 || value2 || check()}`);
// or이 true값을 찾을 때 and는 false를 찾는다
// 마찬가지로 false가 확인되면 연산이 종료된다.
// 따라서 and 또한 연산을 많이 하는 녀석이 뒤로 배치되는것이 좋다.

// often used to compress long if-statement
// nullableObject && nullableObject.something
// if (nullableObject != null) {
//   nullableObject.something;
// }

// ! (not)
console.log(!value1);

/* 7. Equality */
const stringFive = "5";
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);
// == strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const ellie1 = { name: "ellie" };
const ellie2 = { name: "ellie" };
const ellie3 = ellie1;
console.log(ellie1 == ellie2); // false
console.log(ellie1 === ellie2); // false
console.log(ellie1 === ellie3); // true
// ellie1과 2는 같은 값이 들어갔지만 저장되는 형태가 reference이므로
// 각 reference가 다르기때문에 같지 않다고 나오며
// ellie3에는 ellie1의 reference를 담은것이므로 같다

// equality - puzzler
console.log(0 == false); //true
console.log(0 === false); //false
console.log("" == false); //true
console.log("" === false); //false
console.log(null == undefined); //true
console.log(null === undefined); //false

/* 8. Conditional operators: if */
// if, else if, else
const name = "홍길동";
if (name === "ellie") {
  console.log("Hi, ellie");
} else if (name === "홍길동") {
  console.log("동해번쩍 삐까번쩍");
} else {
  console.log("넌 누구니");
}

/* 9. Ternary operator: ? */
// condition ? value : value2;
console.log(name === "ellie" ? "yes" : "no");

/* 10. Switch statement */
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = "IE";
switch (browser) {
  case "IE":
    console.log("안녕 익스플로러");
    break;
  case "크롬":
  case "Chrome":
    console.log("크롱크롬");
    break;
  case "불여우":
    console.log("You're Fired!");
    break;

  default:
    console.log("아무고토 해당 않되!");
    break;
}

/* Loops */
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}

// do while loop, body code is executed first,
// then check the condition.
do {
  console.log(`do while: ${i}`);
  i--;
} while (i > 0);

// while은 조건에 맞으면 실행함
// do while은 실행 먼저 하고 조건을 봄

// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
  console.log(`for: ${i}`);
}
for (let i = 3; i > 0; i = i - 2) {
  // inline variable declaration
  console.log(`inline variable for: ${i}`);
}

// nested loops
for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 4; j++) {
    console.log(`i: ${i}, j: ${j}`);
  }
}

// break, continue
// Q1. iterate from 0 to 10 and print only even numbers (use continue)
for (let i = 0; i < 11; i++) {
  if (i % 2 === 1) {
    continue;
  }
  console.log(i);
}
// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
for (let i = 0; i < 11; i++) {
  console.log(i);
  if (i == 8) {
    break;
  }
}
