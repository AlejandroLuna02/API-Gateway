import { IInventoryRepository } from '../../domain/repositories/IInventoryRepository';

export class UpdateInventory {
    constructor(private inventoryRepository: IInventoryRepository) {}

    async execute(productId: string, quantity: number) {
        return await this.inventoryRepository.updateQuantity(productId, quantity);
    }
}
