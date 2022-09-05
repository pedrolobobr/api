import Sequelize, { Model } from "sequelize";
 
class chapters extends Model {
  static init(sequelize) {
    super.init(
      {
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
      }
    );
 
    return this;
  }
}
 
export default chapters