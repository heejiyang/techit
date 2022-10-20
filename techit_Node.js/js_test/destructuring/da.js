// 예시 1
const object = {a: 1, b: 2};

// 비구조화 할당
const {a, b} = object;

// 하나하나 적는 것 비효율적이라 비구조화 할당한다.
// const a = object.a;
// const b = object.b;
console.log(a);
console.log(b);

// 예시 2
// 비구조화 할당 : 객체, 배열안의 값을 추출해서 변수, 상수에 바로 선언하는 문법
const array = (1, 2);
const [one, two] = array;

console.log(one);
console.log(two);