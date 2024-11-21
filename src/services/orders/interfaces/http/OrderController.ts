import { Request, Response } from 'express';
import { CreateOrder } from '../../application/use-cases/CreateOrder';
import { PostgresOrderRepository } from '../../infrastructure/database/postgresRepository';

const repository = new PostgresOrderRepository();
const createOrder = new CreateOrder(repository);

export const OrderController = {
    create: async (req: Request, res: Response) => {
        const { userId, total } = req.body;
        const order = await createOrder.execute(userId, total);
        res.status(201).json(order);
    },
};
