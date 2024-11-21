import { Order } from '../entities/Order';

export interface IOrderRepository {
    create(userId: string, total: number): Promise<Order>;
    findById(id: string): Promise<Order | null>;
}
