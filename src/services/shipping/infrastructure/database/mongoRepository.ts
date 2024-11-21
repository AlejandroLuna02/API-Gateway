import mongoose from 'mongoose';
import { Shipping } from '../../domain/entities/Shipping';
import { IShippingRepository } from '../../domain/repositories/IShippingRepository';

const shippingSchema = new mongoose.Schema({
    orderId: String,
    address: String,
    status: String,
});

const ShippingModel = mongoose.model('Shipping', shippingSchema);

export class MongoShippingRepository implements IShippingRepository {
    async create(orderId: string, address: string): Promise<Shipping> {
        const shipping = new ShippingModel({ orderId, address, status: 'Pending' });
        await shipping.save();
        return new Shipping(shipping.id, orderId, address, 'Pending');
    }

    async findById(id: string): Promise<Shipping | null> {
        const shipping = await ShippingModel.findById(id);
        if (!shipping) return null;
    
        // Crear una instancia explícita de la clase Shipping
        return new Shipping(
            shipping._id.toString(), // Convertir _id a string
            shipping.orderId,
            shipping.address,
            shipping.status
        );
    }
}
