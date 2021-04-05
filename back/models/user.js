module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', { //Model: 대문자, MySQL은 users 테이블 생성
    // id: {}, id가 기본적으로 들어있음
    // excel의 column들 
    email: {
      type: DataTypes.STRING(30), // INT 정수, FLOAT 실수, TEXT, BOOLEAN, DATETIME, INTEGER
      allowNull: false, // false는 필수 , true면 선택
      unique: true, // 고유한 값
    },
    nickname: {
      type: DataTypes.STRING(30),
      allowNull: false, // false는 필수 , true면 선택
    },
    passworkd: {
      type: DataTypes.STRING(100), // password는 암호화 하기때문에 길이가 길 수 있음
      allowNull: false, // false는 필수 , true면 선택
    },
  }, {
    charset: 'utf8', 
    collate: 'utf8_general_ci', // 한글 사용할 수 있음, 한글 저장
  });

  User.associate = (db) => {
    db.User.hasMany(db.Post);
    db.User.hasMany(db.Comment);
    db.User.belongsToMany(db.Post, {through: 'Like', as: 'Liked'}); // 좋아요 through를 통해 중간 테이블명 변경, as는 별칭
    db.User.belongsToMany(db.User, {through: 'Follow', as: 'Followers', foreignKey: 'FollowingId'});
    db.User.belongsToMany(db.User, {through: 'Follow', as: 'Followings', foreignKey: 'FollowerId'});// foreignKey는 같은 User이기 때문에 각 컬럼에 대한 다른 아이디를 만들어 주는것
  };
  return User;
}
