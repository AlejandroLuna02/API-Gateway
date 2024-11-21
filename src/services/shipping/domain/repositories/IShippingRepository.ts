import { Shipping } from '../entities/Shipping';

export interface IShippingRepository {
    create(orderId: string, address: string): Promise<Shipping>;
    findById(id: string): Promise<Shipping | null>;
}
