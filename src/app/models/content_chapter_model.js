import Sequelize, { Model } from "sequelize";
 
class content_chapters extends Model {
  static init(sequelize) {
    super.init(
      {
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
      },
      {
        sequelize,
        tableName: 'content_chapters',
      }
    );
 
    return this;
  }
  /**
   * Sempre que um model tiver um relacionamento 
   * adicionaremos esse associate para indicar
   * com que esse model se relaciona
   */
  static associate(models){
    /**
     * Neste caso usaremos o belongsTo, mas dependendo da necessidade
     * temos outras opçoes
     * belongsToMany, belongsTo, HasMany, HasOne,Association
     * para conhecer mais acesse:
     * https://sequelize.org/master/class/lib/associations/belongs-to.js~BelongsTo.html
     */
 
    this.belongsTo(models.Curso, {
        foreignKey: 'chapters_id',
        as: 'chapters',
    });
 
  }
}
 
export default content_chapters