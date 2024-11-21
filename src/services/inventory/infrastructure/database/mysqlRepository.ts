import mysql from 'mysql2/promise';
import { Inventory } from '../../domain/entities/Inventory';
import { IInventoryRepository } from '../../domain/repositories/IInventoryRepository';

export class MySQLInventoryRepository implements IInventoryRepository {
    private connection: mysql.Connection;

    constructor() {
        this.connection = mysql.createPool({
            host: 'localhost',
            user: 'root',
            password: 'password',
            database: 'inventory',
        }) as mysql.Connection;
    }

    async updateQuantity(productId: string, quantity: number): Promise<Inventory> {
        await this.connection.execute(
            'UPDATE inventory SET quantity = ? WHERE product_id = ?',
            [quantity, productId]
        );
        const [rows] = await this.connection.execute('SELECT * FROM inventory WHERE product_id = ?', [productId]);
        const row = (rows as any[])[0];
        return new Inventory(row.id, row.product_id, row.quantity);
    }

    async findByProductId(productId: string): Promise<Inventory | null> {
        const [rows] = await this.connection.execute('SELECT * FROM inventory WHERE product_id = ?', [productId]);
        if ((rows as any[]).length === 0) return null;
        const row = (rows as any[])[0];
        return new Inventory(row.id, row.product_id, row.quantity);
    }
}
