import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

import productsRouter from './src/routes/products.routes.js';
import authRouter from './src/routes/auth.routes.js';
import { authentication } from './src/middlewares/auth.middleware.js';

dotenv.config();

const app  = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api/products', authentication, productsRouter);
app.use('/auth', authRouter);

app.get('/', (req, res) => {
    res.send('API funcionando exitosamente');
});

app.use((req, res, next) => {
    res.status(404).send('Recurso no encontrado o ruta inválida');
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({error: err.message || 'Error interno del servidor'});
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});


