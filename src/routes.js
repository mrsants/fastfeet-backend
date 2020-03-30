import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multerConfig';
import DeliverymansController from './app/controllers/DeliverymansController';
import OrderDeliveryController from './app/controllers/OrderDeliveryController';
import OrderManagementsController from './app/controllers/OrderManagementsController';
import PhotosController from './app/controllers/PhotosController';
import ProblemsDeliveryController from './app/controllers/ProblemsDeliveryController';
import RecipientController from './app/controllers/RecipientController';
import ScheduleController from './app/controllers/ScheduleController';
import SessionController from './app/controllers/SessionController';
import UserController from './app/controllers/UserController';
import AuthenticationMiddleware from './app/middlewares/auth';

const routes = Router();

const upload = multer(multerConfig);

routes.get('/deliverymans/:deliverymanId/deliveries', ScheduleController.index);

routes.put(
  '/deliverymans/:deliverymanId/deliveries/:orderDeliverId',
  ScheduleController.update,
);

routes.put(
  '/order-delivery/:orderDeliveryId/deliverymans/:deliveryId',
  OrderDeliveryController.update,
);

routes.get(
  '/order-delivery/:orderDeliveryId/deliverymans',
  OrderDeliveryController.index,
);

routes.post('/users', UserController.store);

routes.post('/sessions', SessionController.store);

routes.post(
  '/deliveries/:orderManagementId/problems',
  ProblemsDeliveryController.store,
);

routes.use(AuthenticationMiddleware);

routes.put('/users', UserController.update);

routes.get('/recipient', RecipientController.index);

routes.get('/recipient/:recipientId', RecipientController.show);

routes.post('/recipient', RecipientController.store);

routes.put('/recipient/:recipientId', RecipientController.update);

routes.delete('/recipient/:recipientId', RecipientController.delete);

routes.post('/photos', upload.single('photos'), PhotosController.store);

routes.get('/deliverymans', DeliverymansController.index);

routes.get('/deliverymans/:id', DeliverymansController.show);

routes.post('/deliverymans', DeliverymansController.store);

routes.put('/deliverymans/:id', DeliverymansController.update);

routes.delete('/deliverymans/:id', DeliverymansController.delete);

routes.get(
  '/order-management',
  OrderManagementsController.index,
);

routes.get(
  '/order-management/:id',
  OrderManagementsController.show,
);

routes.post('/order-management', OrderManagementsController.store);

routes.put(
  '/order-management/:id',
  OrderManagementsController.update,
);

routes.delete(
  '/order-management/:id',
  OrderManagementsController.delete,
);

routes.get('/problems', ProblemsDeliveryController.index);

routes.get('/problems/:orderManagementId', ProblemsDeliveryController.show);

routes.delete('/problems/:problemId', ProblemsDeliveryController.delete);

export default routes;
