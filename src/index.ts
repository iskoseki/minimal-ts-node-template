import { NextFunction, Request, Response } from 'express'; 
import createApp from './createApp';

const PORT = process.env.PORT || 3000;

const app = createApp();

app.get('/hello', (req: Request, res: Response, next: NextFunction) => {
    res.send('<h1>Minimal Typescript & Express setup 🍄</h1>');
});



app.listen(PORT, () => {
    console.log('✨ Server started on port 3000\n 🔗 Localhost environment: http://localhost:3000');
});