// const http = require('http');
const express = require('express');
const postRouter = require('./routes/post');
const db = require('./models');
const app = express();

db.sequelize.sync()
  .then(()=>{
    console.log('db 연결 성공')
  })
  .catch(console.error);

// get, post, put .. 정확히 지키는 것을 restAPI 라고함
// 시멘틱이랑 비슷한 의미
// ex. 게시글 가져오면서 조회수를 1 올린다 와 같이 애매한것들은 'post'를 이용

// app.get     -> 가져오기
// app.post    -> 생성하기
// app.put     -> 전체수정
// app.delete  -> 제거
// app.patch   -> 부분 수정 ex. 닉네임만 수정
// app.options -> 찔러보기 ex. 요청 보낼수 있어?
// app.head    -> 헤더만 가져오기

app.get('/',  (req, res)=>{
  res.send('hello express');
});

app.get('/',  (req, res)=>{
  res.send('hello api');
});

app.get('/posts',  (req, res)=>{
  res.json([
    {id: 1, content: 'hello1'},
    {id: 2, content: 'hello2'},
    {id: 3, content: 'hello3'},
  ]);
});

app.use('/post', postRouter);
// post가 prefix로 붙게 됨

// // 생성
// app.post('/post',  (req, res)=>{
//   res.json({ id: 1, content: 'hello' });
// });

// // 삭제
// app.delete('/post',  (req, res)=>{
//   res.json({ id: 1 });
// });

app.listen(3065, () => {
  console.log('서버실행중!!!')
});

// const server = http.createServer((req, res)=>{
//   console.log(req.url, req.method);
//   res.write('<h1>Hello Node! 1</h1>');
//   res.write('<h2>Hello Node! 2</h2>');
//   res.write('<h3>Hello Node! 3</h3>');
//   res.end('Hello Node!');


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
// });

// server.listen(3065, () => {
//   console.log('서버실행중')
// });
// http.listen(3000);