const Sequelize = require("sequelize");
const database = require("../db");

const Content_chapter = database.define('content_chapter', {
  
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
})

module.exports = Content_chapter;