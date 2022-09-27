import { Request, Response, Router } from 'express';
import reverseWordUseCase from '../services/reserve-word-service';

const router = Router();

const reverseWord = (req: Request, res: Response) => {
  try {
    const result = reverseWordUseCase(req.params.wordToReverse);
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(error);
  }
};

router.get('/:wordToReverse', reverseWord);

export default router;
