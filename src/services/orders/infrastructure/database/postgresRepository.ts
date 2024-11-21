import { Pool } from 'pg';
import { Order } from '../../domain/entities/Order';
import { IOrderRepository } from '../../domain/repositories/IOrderRepository';

export class PostgresOrderRepository implements IOrderRepository {
    private pool: Pool;

    constructor() {
        this.pool = new Pool({
            user: 'postgres',
            host: 'localhost',
            database: 'orders',
            password: 'password',
            port: 5432,
        });
    }

    async create(userId: string, total: number): Promise<Order> {
        const result = await this.pool.query(
            'INSERT INTO orders (user_id, total, status) VALUES ($1, $2, $3) RETURNING *',
            [userId, total, 'Pending']
        );
        const row = result.rows[0];
        return new Order(row.id, row.user_id, row.total, row.status);
    }

    async findById(id: string): Promise<Order | null> {
        const result = await this.pool.query('SELECT * FROM orders WHERE id = $1', [id]);
        if (result.rows.length === 0) return null;
        const row = result.rows[0];
        return new Order(row.id, row.user_id, row.total, row.status);
    }
}
