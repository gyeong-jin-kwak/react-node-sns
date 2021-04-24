const passport = require('passport');
const { Strategy: LocalStrategy } = require('passport-local');
const bcrypt = require('bcrypt');
const { User } = require('../models');

module.exports = () => {
  passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
  }, async (email, password, done)=>{

    try{

      const user =  await User.findOne({
        where: {email}
      });
      if(!user){
        return done(null, false, {reason: '존재하지 않는 이메일입니다'}) // 서버 null, 성공 false, 클라이언트 에러 reasone
      };
      const result = await bcrypt.compare(password, user.password);
      if(result){
        return done(null, user); // 서버 null, 사용자 정보를 넘겨줌 user
      }
      return done(null, false, {reason: '비밀번호가 틀렸습니다.'})

    } catch(error) {

      console.error(error);
      return done(error);

    }
  }))
}
