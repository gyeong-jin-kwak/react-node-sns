const express = require('express');
const bcrypt = require('bcrypt');
const { User, Post } = require('../models');

const router = express.Router();

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
    };

    const hashedPassword = await bcrypt.hash(req.body.password, 12); // 10-13 숫자가 높을수록 보안이 높아짐
    await User.create({
      email: req.body.email,
      nickname: req.body.nickname,
      password: hashedPassword,
    });
    // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    // 200 은 성공
    // res.json();
    res.status(200).send('ok');

  } catch(error) {
    console.error(error);
    next(error); //status 500
  }
});

module.exports = router;
