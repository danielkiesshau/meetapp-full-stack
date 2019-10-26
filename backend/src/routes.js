import { Router } from 'express';
import multer from 'multer';
import authMiddlewarer from './app/middlewares/auth';
import multerConfig from './config/multer';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import ProviderController from './app/controllers/ProviderController';
import EventController from './app/controllers/EventController';
import AvailableController from './app/controllers/AvailableController';
import SubscriptionController from './app/controllers/SubscriptionController';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/sessions', SessionController.store);
routes.post('/users', UserController.store);
routes.get('/files/:id', FileController.index);

routes.use(authMiddlewarer);
routes.put('/users', UserController.update);

routes.post('/files', upload.single('file'), FileController.store);

routes.post('/events', EventController.store);
routes.get('/events', EventController.index);
routes.delete('/events/:id', EventController.delete);
routes.put('/events/:id', EventController.update);

routes.post('/subscriptions', SubscriptionController.store);
routes.delete('/subscriptions/:id', SubscriptionController.delete);
routes.get('/subscriptions/', SubscriptionController.index);

routes.get('/providers', ProviderController.index);
routes.get('/providers/:providerId/available', AvailableController.index);

export default routes;
