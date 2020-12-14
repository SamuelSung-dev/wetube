import express from 'express';
import {
  changePassword,
  editProfile,
  user,
  userDetail,
} from '../controllers/userController';
import routes from '../routes';

const userRouter = express.Router();

userRouter.get(routes.user, user);
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.changePassword, changePassword);
userRouter.get(routes.userDetail(), userDetail);

export default userRouter;
