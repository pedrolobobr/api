'use strict';
 
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn("id_chapter", "content", "type", "createdAt", "updatedAt", {
    type: Sequelize.INTEGER,
    references: { model: 'content_chapters', key: 'id'},
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
    allowNull:true
  }),
 
  down: (queryInterface) => queryInterface.removeColumn("id_chapter", "content", "type", "createdAt", "updatedAt")
};