module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', { //Model: 대문자, MySQL은 users 테이블 생성
    // id: {}, id가 기본적으로 들어있음
    content: {
      type: DataTypes.TEXT,
      allowNull: false, //필수
    },
  }, {
    charset: 'utf8mb4', //이모티콘 mb4
    collate: 'utf8mb4_general_ci', // 한글 사용할 수 있음, 한글 저장
  });

  Post.associate = (db) => {};
  return Post;
}
