import { Router } from 'express';
import { UserRoutes } from '../module/user/user.route';
import { BlogRouts } from '../module/blog/blog.route';
import { AdminRouts } from '../module/Admin/admin.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: UserRoutes,
  },
  {
    path: '/blogs',
    route: BlogRouts,
  },
  {
    path: '/admin',
    route: AdminRouts,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
