'use strict';
module.exports = (sequelize, DataTypes) => {
  const Album = sequelize.define('Album', {
    userId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    private: DataTypes.BOOLEAN,
    pictureId: DataTypes.INTEGER
  }, {});
  Album.associate = function (models) {
    Album.hasMany(models.Picture, { foreignKey: 'albumId' })
  };
  return Album;
};
