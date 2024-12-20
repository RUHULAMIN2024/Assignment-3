import { Blog } from '../blog/blog.model';

const deleteBlog = async (id: string) => {
  const result = await Blog.findByIdAndDelete(id);
  return result;
};

const blockedUser = async (userId: string) => {
  const result = await Blog.findByIdAndUpdate(
    userId,
    { isBlocked: true },
    {
      new: true,
      runValidators: true,
    },
  ).populate('author');
  return result;
};

export const AdminService = {
  blockedUser,
  deleteBlog,
};
