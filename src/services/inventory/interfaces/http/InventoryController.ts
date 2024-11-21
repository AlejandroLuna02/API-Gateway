import { Request, Response } from 'express';
import { UpdateInventory } from '../../application/use-cases/UpdateInventory';
import { MySQLInventoryRepository } from '../../infrastructure/database/mysqlRepository';

const repository = new MySQLInventoryRepository();
const updateInventory = new UpdateInventory(repository);

export const InventoryController = {
    update: async (req: Request, res: Response) => {
        const { productId, quantity } = req.body;
        const inventory = await updateInventory.execute(productId, quantity);
        res.status(200).json(inventory);
    },
};
