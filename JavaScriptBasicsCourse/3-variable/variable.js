// 1. Use strict
// added in ES 5
// use this for Vanilla
"use strict";

// 2. Variable, rw(read/write)
// let (added in ES6)

// Global scope
let globalName = "global name";
// Block scope
{
  let name = "ellie";
  console.log(name);
  name = "hello";
  console.log(name);
}

// var (don't ever use this!)
// var hoisting (move declaration from bottom to top)
// var 호이스팅 (선언문을 아래에서 위로 이동)
// has no block scope
// let은 변수를 선언하고 값을 할당해야 하지만
// var는 할당 먼저 해도 지맘대로 위로 가서 선언됨
// 지역변수(Block scope)로 넣어도 밖에서 호출이 됨
console.log(age);
{
  age = 4;
  var age;
}
console.log(age);

// 3. Constant, r(read only)
// use const whenever possible.
// 가능하면 const를 사용하십시오.
// only use let if variable needs to change.
// 변수가 변경되어야 하는 경우에만 let을 사용합니다.
// Immutable data types: premitive types, frozen objects (i.e. object.freeze())
// 불변 데이터 유형: 기본 유형, 고정 객체(i.n. object.freeze())
// Mutable data types: all objects by default are mutable in JS
// 변경 가능한 데이터 유형: 기본적으로 모든 객체는 JS에서 변경 가능합니다.
// favor immutable data type always for a few reasons:
// 다음과 같은 이유로 항상 불변 데이터 유형을 선호합니다
//  - security (보안)
//  - thread safety (스레드 안전성)
//  - reduce human mistakes (인간의 실수 줄이기)
const daysInWeek = 7;
const maxNumber = 5;

// 4. Variable types
// primitive, single item: number, string, null, undefined,
// symbol, object, box container
// function,
// first-class function
// ㄴ(변수에 할당 가능, 함수의 인자로 전달 가능, 함수를 리턴하는것 가능)

// (다른 언어에서는 숫자에 크기를 지정해줘야 하지만)
// (타입을 지정해주지 않아도 JS는 알아서 타입이 지정됨)
// (TS를 사용하더라도 number 타입 하나로 알아서 됨)
const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - special numeric values:
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = "not a number" / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigint 2^53이 넘어가는 수 뒤에 n을 붙이면 bigint로 간주됨
// (사실상 사용할 일이 딱히 없음)
// bigInt (fairly new, don't use it yet)
const bigInt = 123456789012345678901234567890n; // over (-2**53) ~ (2**53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);
console.log(bigInt);
Number.MAX_SAFE_INTEGER;

// string
const char = "c";
const brendan = "brendan";
const greeting = "hello " + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; // template literals (string)
console.log(`value: ${greeting}, type: ${typeof greeting}`);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null - 비어있는 값
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined - 비었는지 값이 있는지 아예 정의가 안된 상태
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol - create unique identifiers for objects(객체에 대한 고유 식별자 생성에 쓰임)
const symbol1 = Symbol("id");
const symbol2 = Symbol("id");
console.log(symbol1);
console.log(symbol2);
// 둘이 생긴게 같아보이지만 다르게 인식되므로 식별자로 쓰이는 것
console.log(symbol1 == symbol2); // false
// 스트링 값이 동일하면 동일한 심볼을 만들 수도 있음
const gSymbol1 = Symbol.for("id");
const gSymbol2 = Symbol.for("id");
console.log(gSymbol1 === gSymbol2); // true
console.log(`value: ${gSymbol1.description}, type: ${typeof gSymbol1}`);

// object, real-life object, data structure
const ellie = { name: "ellie", age: 20 };
// const로 선언한 ellie는 재할당이 불가하지만
// 그 안에 들어있는 각 객체들은 재할당 할 수 있다
ellie.age = 50;

// 5. Dynamic typing: dynamically typed language
let text = "hello"; // 문자를 넣었으니 string으로 들어감
console.log(text.charAt(1)); // 'hello'에서 1번인덱스인 e가 출력됨
console.log(`value: ${text}, type: ${typeof text}`);
text = 1; // 재할당을 숫자로 하면 number가 됨
console.log(`value: ${text}, type: ${typeof text}`);
text = "7" + 5; // string과 number를 더하면 string으로 인식해서 75가 됨
console.log(`value: ${text}, type: ${typeof text}`);
text = "8" / "2"; // 문자열은 나누기를 할 수 없음 > 숫자로 인식해서 4가 됨
console.log(`value: ${text}, type: ${typeof text}`);
// JS는 런타임에서 타입이 정해지기 때문에,
// 재할당을 통해 number가 됐고 charAt은 string에 사용되는 메서드이기 때문에
// Uncaught TypeError: text.charAt is not a function 에러 발생
console.log(text.charAt(1));
// 이러한 일들을 예방하기 위해 TS가 있음
