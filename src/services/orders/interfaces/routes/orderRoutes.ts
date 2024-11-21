import { Router } from 'express';
import { OrderController } from '../http/OrderController';

const router = Router();

router.post('/', OrderController.create);

export default router;
