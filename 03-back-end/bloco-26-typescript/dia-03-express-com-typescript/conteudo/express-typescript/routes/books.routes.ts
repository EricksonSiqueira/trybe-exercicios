import { Router } from 'express';

const router = Router();

import BooksController from '../controllers/books.controller';
import validationBook from '../middleware/books.middleware';

const booksController = new BooksController();

const booksSlashId = '/books/:id';

router.get('/books', booksController.getAll);
router.get(booksSlashId, booksController.getById); 
router.post('/books/', validationBook, booksController.create);
router.put(booksSlashId, validationBook, booksController.update);
router.delete(booksSlashId, booksController.remove);

export default router;