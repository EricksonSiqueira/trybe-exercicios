import { Router } from "express";

import UserController from "../controllers/users.controller";

const router = Router();
const userController = new UserController();

router.use('/users', userController.getAll);

export default router;
