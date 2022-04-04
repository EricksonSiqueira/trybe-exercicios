import express, { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import UsersRouter from './routes/user.routes';

const app = express();

app.use(express.json());

const PORT = 8000;

app.get('/', (_req: Request, res: Response) => {
    res.status(StatusCodes.OK).send('Express + TypeScript')
});

app.use(UsersRouter);

app.use((err: Error , _req: Request, res: Response, next: NextFunction) => {
  const { name, message, details } = err as any;
  console.log(`name: ${name}`);

  switch(name) {
    case 'ValidationError':
      res.status(StatusCodes.BAD_REQUEST).json({ message: details[0].message });
      break;
    case 'NotFoundError':
      res.status(StatusCodes.NOT_FOUND).json({ message });
      break;
    case 'ConflitError':
      res.status(StatusCodes.CONFLICT).json({ message });
      break;
    default:
      console.error(err);
      res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
  }

  next()
});

app.listen(PORT, () => {
    console.log(`Ta rodando em http://localhost:${PORT}`);
});