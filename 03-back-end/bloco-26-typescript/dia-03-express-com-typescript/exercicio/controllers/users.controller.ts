import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import UserService from '../services/users.service';

export default class UserController {
  constructor(private userService = new UserService()) {  }

  public getAll = async (_req: Request, res: Response) => {
    try {
          const users = await this.userService.getAll();

    res.status(StatusCodes.OK).json(users);
    } catch (error) {
      console.log('Ta dando esse error aquiiiiiiiiiiiiiiiiiii', error);
    }
  }
};
