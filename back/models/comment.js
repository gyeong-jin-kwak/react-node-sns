module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', { //Model: 대문자, MySQL은 users 테이블 생성
    // id: {}, id가 기본적으로 들어있음
    content: {
      type: DataTypes.TEXT,
      allowNull: false, //필수
    },
    // belongsTo는 UserId 와 PosterId column을 만들어줌
    // UserId: {},
    // PosterId: {}
  }, {
    charset: 'utf8mb4', //이모티콘 mb4
    collate: 'utf8mb4_general_ci', // 한글 사용할 수 있음, 한글 저장
  });

  Comment.associate = (db) => {
    db.Comment.belongsTo(db.User);
    db.Comment.belongsTo(db.Post);
  };
  return Comment;
}
