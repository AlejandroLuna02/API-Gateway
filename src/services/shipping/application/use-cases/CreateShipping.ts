import { IShippingRepository } from '../../domain/repositories/IShippingRepository';

export class CreateShipping {
    constructor(private shippingRepository: IShippingRepository) {}

    async execute(orderId: string, address: string) {
        return this.shippingRepository.create(orderId, address);
    }
}
