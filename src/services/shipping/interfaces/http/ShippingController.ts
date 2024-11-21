import { Request, Response } from 'express';
import { CreateShipping } from '../../application/use-cases/CreateShipping';
import { MongoShippingRepository } from '../../infrastructure/database/mongoRepository';

const repository = new MongoShippingRepository();
const createShipping = new CreateShipping(repository);

export const ShippingController = {
    create: async (req: Request, res: Response) => {
        const { orderId, address } = req.body;
        const shipping = await createShipping.execute(orderId, address);
        res.status(201).json(shipping);
    },
};
