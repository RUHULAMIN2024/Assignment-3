import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { BlogSchemaUpdateZod, BlogSchemaZod } from './blog.validation';
import { BlogController } from './blog.controller';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../user/user.constant';
const router = express.Router();

router.post(
  '/',
  validateRequest(BlogSchemaZod),
  auth(USER_ROLE.admin, USER_ROLE.user),
  BlogController.createBlog,
);
router.patch(
  '/:id',
  validateRequest(BlogSchemaUpdateZod),
  auth(USER_ROLE.admin, USER_ROLE.user),
  BlogController.updateBlog,
);
router.delete(
  '/:id',
  auth(USER_ROLE.admin, USER_ROLE.user),
  BlogController.deleteBlog,
);
router.get(
  '/',
  auth(USER_ROLE.admin, USER_ROLE.user),
  BlogController.getAllBlogs,
);
router.get(
  '/:id',
  auth(USER_ROLE.admin, USER_ROLE.user),
  BlogController.getSingleBlog,
);

export const BlogRouts = router;
