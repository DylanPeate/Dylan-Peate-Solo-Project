'use strict';
module.exports = (sequelize, DataTypes) => {
  const FavoritePicture = sequelize.define('FavoritePicture', {
    userId: DataTypes.INTEGER,
    pictureId: DataTypes.INTEGER
  }, {});
  FavoritePicture.associate = function (models) {
    // associations can be defined here
  };
  return FavoritePicture;
};
