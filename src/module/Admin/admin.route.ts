import express from 'express';
import { AdminController } from './admin.controller';
const router = express.Router();

router.patch('/users/:userId/block', AdminController.blockedUser);
router.delete('/blogs/:id', AdminController.deleteBlog);

export const AdminRouts = router;
