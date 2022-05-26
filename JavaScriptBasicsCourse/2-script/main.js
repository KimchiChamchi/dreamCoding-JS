// Whole-script strict mode syntax
// JavaScript is very flexible
// flexible === dangerous
// added ECMAScript 5
// 전체 스크립트 엄격 모드 구문
// 자바스크립트는 매우 유연합니다.
// 유연함 === 위험
// ECMAScript 5 추가

"use strict";

let a; // use strict가 없으면 변수 a를 선언하지 않아도
a = 6; // 할당할 때 에러가 안남

console.log(a);

/* 
js파일 상단에 'use strict' 을 선언하게 되면

다른 언어들에선 문제가 되지만 js에선 기본적으로 문제시 하지 않는 부분을 잡아내준다(문법에 엄격해짐) 

또한 'use strict' 모드를 사용하게 되면 JS 엔진이 더 효율적이게 분석하게 되어 성능개선을 기대할 수 있다고 한다
*/
