const http = require("http");

http
    .createServer((req, res) => {
        if(req.url === "/") { // main url (라우팅)
            res.writeHead(200);
            res.end("main url");
        } else if (req.url === "/upload") { // upload url (라우팅)
            res.writeHead(200);
            res.end("upload url");
        } else if (req.url === "/delete") {
            res.writeHead(200);
            res.end("delete url");
        } else {
            res.writeHead(404);
            res.end("Not found!!!");
        }
    })
    .listen(3000, () => {
        console.log("3000번 포트 서버 접속 완료~!!"); // 서버에서 localhost:3000 작성하면 Hello World~!!!출력된다.
    })