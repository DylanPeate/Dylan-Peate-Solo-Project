'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    userId: DataTypes.INTEGER,
    body: DataTypes.STRING,
    pictureId: DataTypes.INTEGER,
    commentUser: DataTypes.STRING
  }, {});
  Comment.associate = function (models) {
    Comment.belongsTo(models.Picture, { foreignKey: 'pictureId' })
    Comment.belongsTo(models.User, { foreignKey: 'commentUser' })
  };
  return Comment;
};
