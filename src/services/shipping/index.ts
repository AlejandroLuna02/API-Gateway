import express from 'express';
import mongoose from 'mongoose';
import shippingRoutes from './interfaces/routes/shippingRoutes';

const app = express();
app.use(express.json());

// Conexión a MongoDB (moderna)
mongoose.connect('mongodb://localhost:27017/shipping')
    .then(() => {
        console.log('Connected to MongoDB successfully.');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

// Rutas
app.use('/shipping', shippingRoutes);

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Shipping Service running on port ${PORT}`);
});
