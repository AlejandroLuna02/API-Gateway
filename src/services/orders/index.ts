import express from 'express';
import orderRoutes from './interfaces/routes/orderRoutes';

const app = express();
app.use(express.json());

// Rutas
app.use('/orders', orderRoutes);

const PORT = 3002;
app.listen(PORT, () => {
    console.log(`Order Service running on port ${PORT}`);
});
