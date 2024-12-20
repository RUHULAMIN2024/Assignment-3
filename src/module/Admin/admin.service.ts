import { Blog } from '../blog/blog.model';
import { User } from '../user/user.model';

const deleteBlog = async (id: string) => {
  const result = await Blog.findByIdAndDelete(id);
  return result;
};

const blockedUser = async (userId: string) => {
  const result = await User.findByIdAndUpdate(
    userId,
    { isBlocked: true },
    {
      new: true,
      runValidators: true,
    },
  );
  return result;
};

export const AdminService = {
  blockedUser,
  deleteBlog,
};
