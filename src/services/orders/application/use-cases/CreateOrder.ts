import { IOrderRepository } from '../../domain/repositories/IOrderRepository';

export class CreateOrder {
    constructor(private orderRepository: IOrderRepository) {}

    async execute(userId: string, total: number) {
        return await this.orderRepository.create(userId, total);
    }
}
