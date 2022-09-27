import { Request, Response, Router } from 'express';
import appendWordsUseCase from '../services/append-words-service';

const router = Router();

const appendWords = (req: Request, res: Response) => {
  try {
    const result = appendWordsUseCase(req.query);
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(error);
  }
};

router.put('/', appendWords);

export default router;
