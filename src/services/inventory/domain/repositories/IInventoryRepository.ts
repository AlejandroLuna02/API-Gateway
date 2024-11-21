import { Inventory } from '../entities/Inventory';

export interface IInventoryRepository {
    updateQuantity(productId: string, quantity: number): Promise<Inventory>;
    findByProductId(productId: string): Promise<Inventory | null>;
}
