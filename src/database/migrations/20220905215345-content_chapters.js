'use strict';
 
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.define('content_chapter', {
  
    id_chapter: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    content: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    type: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    createdAt: {
      type: Sequelize.DATE,
      allowNull: true,
    },
    updatedAt: {
      type: Sequelize.DATE,
      allowNull: true,
    }
  }),
 
  down: (queryInterface) => queryInterface.dropTable("content_chapter")
};