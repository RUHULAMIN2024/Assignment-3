import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { userSchemaZod } from './user.validation';
import { UserController } from './user.controller';
const router = express.Router();

router.post(
  '/register',
  validateRequest(userSchemaZod),
  UserController.createUser,
);

export const UserRoutes = router;
