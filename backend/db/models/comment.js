'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    userId: DataTypes.INTEGER,
    body: DataTypes.STRING,
    pictureId: DataTypes.INTEGER
  }, {});
  Comment.associate = function (models) {
    Comment.belongsTo(models.Picture, { foreignKey: 'pictureId' })
  };
  return Comment;
};
