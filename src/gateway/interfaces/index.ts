import express from 'express';
import { configureRoutes } from './http/routes';

const app = express();
app.use(express.json());

// Configurar rutas
configureRoutes(app);

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`API Gateway running on port ${PORT}`);
});
