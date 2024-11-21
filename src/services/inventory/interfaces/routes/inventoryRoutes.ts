import { Router } from 'express';
import { InventoryController } from '../http/InventoryController';

const router = Router();

router.post('/update', InventoryController.update);

export default router;
