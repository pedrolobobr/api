'use strict';
 
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn("id_comic", "title", "number", "createdAt", "updatedAt", {
    type: Sequelize.INTEGER,
    references: { model: 'chapters', key: 'id'},
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
    allowNull:true
  }),
 
  down: (queryInterface) => queryInterface.removeColumn("id_comic", "title", "number", "createdAt")
};