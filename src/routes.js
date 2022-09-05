import { Router } from 'express';
import chaptersController from './app/controllers/chaptersController';
import content_chaptersController from './app/controllers/content_chaptersController';
const routes = Router();
 
routes.get('/chapters', chaptersController.index)
routes.get('/chapters/:id', chaptersController.show)
routes.post('/chapters', chaptersController.store)
routes.put('/chapters/:id', chaptersController.update)
routes.delete('/chapters/:id', chaptersController.delete)
 
routes.get('/content_chapters', content_chaptersController.index)
routes.get('/content_chapters/:id', content_chaptersController.show)
routes.post('/content_chapters', content_chaptersController.store)
routes.put('/content_chapters/:id', content_chaptersController.update)
routes.delete('/content_chapters/:id', content_chaptersController.delete)
 

export default routes;

