'use strict';
 
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.define("chapters", {
    id_comic: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    number: {
      type: Sequelize.INTEGER,
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
 
  down: (queryInterface) => queryInterface.dropTable("chapters")
};