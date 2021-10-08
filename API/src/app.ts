import express, { Request, Response, NextFunction } from 'express';
import morgan from 'morgan';
import SQLiteDatabase from './data/SQLiteDatabase';
import routerApplication from './routes/application-router';

const app = express();
const router = express.Router();
const database = new SQLiteDatabase();

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(routerApplication(router, database));

// Habilita CORS
app.use((req: Request, res: Response, next: NextFunction) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, Content-Type, Authorization'
  );

  if (req.method === 'OPTIONS') {
    res.header(
      'Access-Control-Allow-Methods',
      'OPTIONS, PUT, POST, DELETE, GET'
    );
    return res.status(200).send({});
  }
  return next();
});

(async () => {
  await database.execMigrations('src/data/migrations');
})();

export default app;
