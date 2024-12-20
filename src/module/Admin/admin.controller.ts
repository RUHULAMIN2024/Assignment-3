import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { AdminService } from './admin.service';

const blockedUser = catchAsync(async (req, res) => {
  const { userId } = req.params;
  const result = await AdminService.blockedUser(userId);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'User blocked successfully',
    data: result,
  });
});

const deleteBlog = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await AdminService.deleteBlog(id);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Blog is deleted succesfully',
    data: result,
  });
});

export const AdminController = {
  deleteBlog,
  blockedUser,
};
