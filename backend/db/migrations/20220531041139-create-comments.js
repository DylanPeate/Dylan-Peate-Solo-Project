'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Comments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Users' }
      },
      body: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      pictureId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Pictures' }
      },
      commentUser: {
        type: Sequelize.STRING,
        allowNull: false,
        references: { model: 'Users', key: 'username' }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Comments');
  }
};
