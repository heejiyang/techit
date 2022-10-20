function sayHello(){
    return new Promise((resolve, reject) => {
        resolve ("hello!!!");
    });
}

async function test(){
    const hello1 = await sayHello(); // sayHello실행시키고 그 결과값을 hello1에 초기화시켜준다.
    console.log(hello1); // hello!!!
}

test();