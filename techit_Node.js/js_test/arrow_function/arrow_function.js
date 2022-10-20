// const foo = () => {
//     console.log("arrow function");
// };

// foo();

// 이렇게 표현할 수 있다.
// function foo() {
//     console.log("arrow function");
// }

const foo1 = (x) => {
    return x;
};
// const foo1 = (x) => x;
console.log(foo1("arrow"));

const foo2 = (x, y) => {
    console.log("2줄 이상");
    return x + y;
};

console.log(foo2(1, 5)); // 6