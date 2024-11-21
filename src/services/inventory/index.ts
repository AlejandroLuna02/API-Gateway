import express from 'express';
import inventoryRoutes from './interfaces/routes/inventoryRoutes';

const app = express();
app.use(express.json());

// Rutas
app.use('/inventory', inventoryRoutes);

const PORT = 3003;
app.listen(PORT, () => {
    console.log(`Inventory Service running on port ${PORT}`);
});
