import express from 'express';
import useStockRoutes from './routes/stock'

export default function createApp() {
    const app = express();
    app.use('/api/stock', useStockRoutes);

    return app;
}