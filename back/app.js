const http = require('http');

const server = http.createServer((req, res)=>{
  console.log(req.url, req.method);
  res.write('<h1>Hello Node! 1</h1>');
  res.write('<h2>Hello Node! 2</h2>');
  res.write('<h3>Hello Node! 3</h3>');
  res.end('Hello Node!');


  // 프론트가 요청을 보내면 백은 응답을 해준다.
  // 기본 코딩 방식 -> 복잡해지기 때문데 'express' 사용
  // 요청을 받으면 무조건 응답해야해고 그렇지 않으면 30초후 자동 실패 메시지게 뜸
  // 요청과 응답은 1:1 matching 응답을 두번 보내서는 안됨, res.end는 한번만 사용

  // if(req.method === 'GET') {
  //   if(req.url === '/api/posts') {

  //   }
  // } else if(req.method === 'POST') {
  //   if(req.url === '/api/posts') {

  //   }
  // } else if(req.method === 'DELETE') {
  //   if(req.url === '/api/posts') {

  //   }
  // }
});

server.listen(3065, () => {
  console.log('서버실행중')
});
// http.listen(3000);