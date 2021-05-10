// const http = require('http');
const express = require('express');
const cors = require('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const passportConfig = require('./passport');
const passport = require('passport')
const dotenv = require('dotenv');

const postRouter = require('./routes/post');
const userRouter = require('./routes/user');
const db = require('./models');

const app = express();
passportConfig();
dotenv.config();

db.sequelize.sync()
  .then(()=>{
    console.log('db 연결 성공')
  })
  .catch(console.error);

app.use(cors({
  origin: '*',
  credentials: true,
}));
// front 에서 받아온 data를 req.body에 넣어주는 역활
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
  saveUninitialized: false,
  resave: false,
  secret: process.env.COOKIE_SECRET
}));
app.use(passport.initialize());
app.use(passport.session());

app.get('/',  (req, res)=>{
  res.send('hello express');
});

// app.get('/',  (req, res)=>{
//   res.send('hello api');
// });

// app.get('/posts',  (req, res)=>{
//   res.json([
//     {id: 1, content: 'hello1'},
//     {id: 2, content: 'hello2'},
//     {id: 3, content: 'hello3'},
//   ]);
// });

app.use('/post', postRouter);
app.use('/user', userRouter);

// 에러를 특별하게 처리하고 싶을때
// app.use((err, req, res, next) => {

// })

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