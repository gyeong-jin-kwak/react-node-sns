module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', { //Model: 대문자, MySQL은 users 테이블 생성
    // id: {}, id가 기본적으로 들어있음
    src: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
  }, {
    charset: 'utf8',
    collate: 'utf8_general_ci', // 한글 사용할 수 있음, 한글 저장
  });

  Image.associate = (db) => {
    db.Image.belongsTo(db.Post);
  };
  return Image;
}
