import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { BlogSchemaZod } from './blog.validation';
import { BlogController } from './blog.controller';
const router = express.Router();

router.post('/', validateRequest(BlogSchemaZod), BlogController.createBlog);
router.patch('/:id', BlogController.updateBlog);
router.delete('/:id', BlogController.deleteBlog);
router.get('/', BlogController.getAllBlogs);

export const BlogRouts = router;
