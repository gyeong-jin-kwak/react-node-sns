module.exports = (sequelize, DataTypes) => {
  const Hashtag = sequelize.define('Hashtag', { //Model: 대문자, MySQL은 users 테이블 생성
    // id: {}, id가 기본적으로 들어있음
    name: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
  }, {
    charset: 'utf8mb4', //이모티콘 mb4
    collate: 'utf8mb4_general_ci', // 한글 사용할 수 있음, 한글 저장
  });

  Hashtag.associate = (db) => {
    db.Hashtag.belongsToMany(db.Post);
  };
  return Hashtag;
}
