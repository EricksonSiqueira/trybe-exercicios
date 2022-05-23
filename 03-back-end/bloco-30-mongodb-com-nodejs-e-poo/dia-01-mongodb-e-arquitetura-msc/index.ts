import { connect, model, Schema } from 'mongoose';

connect('mongodb://localhost:27017/meu_data_base');

interface Book {
  title: string,
  author: string,
  coAuthor: string,
}

const bookSchema = new Schema<Book>({
  title: { type: String, required: true },
  author: { type: String, required: true },
});

const bookModel = model<Book>('books', bookSchema);

