import QueryBuilder from '../../builder/QueryBuilder';
import { CourseSearchableFields } from './blog.constant';
import { IBlog } from './blog.interface';
import { Blog } from './blog.model';

const createBlog = async (payload: IBlog) => {
  const result = await Blog.create(payload);
  return result;
};
const updateBlog = async (blogId: string, payload: Partial<IBlog>) => {
  const result = await Blog.findByIdAndUpdate(blogId, payload, {
    new: true,
    runValidators: true,
  }).populate('author');
  return result;
};

const deleteBlog = async (id: string) => {
  const result = await Blog.findByIdAndDelete(id);
  return result;
};

const getSingleBlog = async (id: string) => {
  const result = await Blog.findById(id).populate('author');
  return result;
};

const getAllBlog = async (query: Record<string, unknown>) => {
  const blogQuery = new QueryBuilder(Blog.find().populate('author'), query)
    .search(CourseSearchableFields)
    .filter()
    .sort();

  const result = await blogQuery.modelQuery;
  return result;
};

export const BlogService = {
  createBlog,
  updateBlog,
  deleteBlog,
  getSingleBlog,
  getAllBlog,
};
