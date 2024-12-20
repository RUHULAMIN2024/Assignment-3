/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { StatusCodes } from 'http-status-codes';
import QueryBuilder from '../../builder/QueryBuilder';
import AppError from '../../errors/AppError';
import { CourseSearchableFields } from './blog.constant';
import { IBlog } from './blog.interface';
import { Blog } from './blog.model';
import mongoose from 'mongoose';

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

// const deleteBlog = async (id: string, userId: string) => {
//   const blog = await Blog.findById(id);
//   if (!blog) {
//     throw new AppError(StatusCodes.FORBIDDEN, 'Blog not found');
//   }

//   if (blog.author.toString() !== userId) {
//     throw new AppError(
//       StatusCodes.UNAUTHORIZED,
//       'You are not authorized to delete this blog',
//     );
//   }
//   const result = await Blog.findByIdAndDelete(id);
//   return result;
// };

const deleteBlog = async (id: string, userId: string) => {
  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    const blog = await Blog.findById(id);
    if (!blog) {
      throw new AppError(StatusCodes.FORBIDDEN, 'Blog not found');
    }
    console.log(userId, blog.author.toString());
    if (blog.author.toString() !== userId) {
      throw new AppError(
        StatusCodes.UNAUTHORIZED,
        'You are not authorized to delete this blog',
      );
    }
    const result = await Blog.findByIdAndDelete(id);

    if (!result) {
      throw new AppError(StatusCodes.BAD_REQUEST, 'Failed to delete blog');
    }

    await session.commitTransaction();
    await session.endSession();

    return result;
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    throw error;
  }
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
