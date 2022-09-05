import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import chapters_model from '../app/models/chapters_model';
import content_chapter from '../app/models/content_chapter_model';
const models = [chapters_model,content_chapter];
 
class Database {
  constructor(){
      this.init();
  }
 
  init(){
    this.connection = new Sequelize(databaseConfig);
    models.map((model) => model.init(this.connection))
      .map((model) => {
          if(model.associate) model.associate(this.connection.models);
          return model;
      })
  }
}
 
export default new Database();