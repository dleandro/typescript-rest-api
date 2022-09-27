import express from 'express';
import jsonbinRouter from './routes/jsonbin-router';
import reverseRouter from './routes/reverse-router';
import appendRouter from './routes/append-router';

const app = express();

app.use('/countries', jsonbinRouter);
app.use('/reverse', reverseRouter);
app.use('/append', appendRouter);

export default app;
