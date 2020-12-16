import express from 'express';
import {
  getJoin,
  getLogin,
  postLogin,
  logout,
  postJoin,
} from '../controllers/userController';
import { onlyPublic, onlyPrivate } from '../middlewares';
import { home, search } from '../controllers/videoController';
import routes from '../routes';

const globalRouter = express.Router();

globalRouter.get(routes.join, onlyPublic, getJoin);
globalRouter.post(routes.join, onlyPublic, postJoin, postLogin);

globalRouter.get(routes.login, onlyPublic, getLogin);
globalRouter.post(routes.login, onlyPublic, postLogin);

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);
globalRouter.get(routes.logout, onlyPrivate, logout);

export default globalRouter;
