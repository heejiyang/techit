const http = require("http");

http
    .createServer((req, res) => {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<p>Hello World~!!!</p>");
    })
    .listen(3000, () => {
        console.log("3000번 포트 서버 접속 완료~!!"); // 서버에서 localhost:3000 작성하면 Hello World~!!!출력된다.
    })


// http : 서버 쉽게 구축할 수 있는 패키지
// .createServer : 서버 생성하고 콜백함수로 request, response받아서 요청과 응답 진행할 수 있는 함수
// listen: 대기시킬 수 있도록 하는 함수
