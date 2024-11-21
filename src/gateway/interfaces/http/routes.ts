import { Express } from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

export const configureRoutes = (app: Express) => {
    app.use(
        '/shipping',
        createProxyMiddleware({ target: 'http://localhost:3001', changeOrigin: true })
    );

    app.use(
        '/orders',
        createProxyMiddleware({ target: 'http://localhost:3002', changeOrigin: true })
    );

    app.use(
        '/inventory',
        createProxyMiddleware({ target: 'http://localhost:3003', changeOrigin: true })
    );

    app.get('/', (req, res) => {
        res.json({ message: 'API Gateway is running' });
    });
};
