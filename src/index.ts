import express, { NextFunction, Request, Response } from 'express'; 
import useStockRoutes from "./routes/stock"

const PORT = process.env.PORT || 3000;

const app = express();

app.get('/hello', (req: Request, res: Response, next: NextFunction) => {
    res.send('<h1>Minimal Typescript & Express setup 🍄</h1>');
});

app.use('/api/stock', useStockRoutes);

app.listen(PORT, () => {
    console.log('✨ Server started on port 3000\n 🔗 Localhost environment: http://localhost:3000');
});