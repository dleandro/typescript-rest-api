import { Request, Response, Router } from 'express';
import { jsonbinServiceUseCase } from '../services/jsonbin-service';

const router = Router();

const fetchJsonbin = async (req: Request, res: Response) => {
  try {
    const data = await jsonbinServiceUseCase(req.query);
    res.status(200).send(data);
  } catch (error: any) {
    res.status(400).send({ errMessage: error?.message });
  }
};

router.get('/', fetchJsonbin);

export default router;
