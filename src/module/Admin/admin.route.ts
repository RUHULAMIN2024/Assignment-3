import express from 'express';
import { AdminController } from './admin.controller';
import { USER_ROLE } from '../user/user.constant';
import auth from '../../middlewares/auth';
const router = express.Router();

router.patch(
  '/users/:userId/block',
  auth(USER_ROLE.admin),
  AdminController.blockedUser,
);
router.delete('/blogs/:id', auth(USER_ROLE.admin), AdminController.deleteBlog);

export const AdminRouts = router;
