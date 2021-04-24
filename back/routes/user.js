const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');
const { User } = require('../models');

const router = express.Router();

router.post('/login', (req, res, next)=>{
  passport.authenticate('local', (err , user, info)=>{ //info client에러 passport local.js reason
    if(err) {
      console.error(err);
      return next(err);
    }
    if(info) {
      return res.status(401).send(info.reason); //401 허가되지 않은 일 http 상태코드
    }
    return req.login(user, async (loginErr)=>{ //passport login
      if(loginErr){
        console.error(loginErr); 
        return next(loginErr);
      }
      return res.status(200).json(user);
    })
  })(req, res, next);
});

router.post('/', async (req, res, next)=>{ // POST /user/
  try {
    const exUser = await User.findOne({
      //조건
      where: {
        email: req.body.email,
      }
    });

    if(exUser) {
      // 403은 금지 
      return res.status(403).send('이미 사용중인 아이디입니다.');
    }; // saga err.response.data

    const hashedPassword = await bcrypt.hash(req.body.password, 12); // 10-13 숫자가 높을수록 보안이 높아짐
    await User.create({
      email: req.body.email,
      nickname: req.body.nickname,
      password: hashedPassword,
    });
    // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    // 200 은 성공
    // res.json();
    return res.status(200).send('ok');

  } catch(error) {
    console.error(error);
    next(error); //status 500
  }
});

module.exports = router;
