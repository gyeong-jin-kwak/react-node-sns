module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', { //Model: 대문자, MySQL은 users 테이블 생성
    // id: {}, id가 기본적으로 들어있음
    content: {
      type: DataTypes.TEXT,
      allowNull: false, //필수
    },
    // RetweetId
  }, {
    charset: 'utf8mb4', //이모티콘 mb4
    collate: 'utf8mb4_general_ci', // 한글 사용할 수 있음, 한글 저장
  });

  Post.associate = (db) => {
    db.Post.belongsTo(db.User);
    db.Post.hasMany(db.Comment);
    db.Post.hasMany(db.Image);
    db.Post.belongsToMany(db.Hashtag, {through: 'PostHashtag'}); // 다대다관계 중간 태이블이 생김
    db.Post.belongsToMany(db.User, {through: 'Like', as: 'Likers'}); // 좋아요 through를 통해 중간 테이블명 변경, as는 별칭
    db.Post.belongsTo(db.Post, {as: 'Retweet'}); // 리트윗
  };
  return Post;
}
