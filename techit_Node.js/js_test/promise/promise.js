// pending
function sayHello(){
    return new Promise((resolve, reject) => {
        resolve ("hello!!!");
        // const hello = "hello Hello";
        // resolve(hello);
        // reject(new Error());
    });
}

sayHello()
    .then((resolvedData) => {
        console.log(resolvedData); // hello!!!
        return resolvedData;
    })
    .then((resolvedData) => {
        console.log(resolvedData); // hello!!!
    })
    .then((resolvedData) => {
        console.log(resolvedData); // hello!!!
    })
    .catch((error) => {
        console.log(error);
    });

fulfilled
rejected