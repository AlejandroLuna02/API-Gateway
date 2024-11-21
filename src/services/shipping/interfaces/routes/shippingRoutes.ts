import { Router } from 'express';
import { ShippingController } from '../http/ShippingController';

const router = Router();

router.post('/', ShippingController.create);

export default router;
