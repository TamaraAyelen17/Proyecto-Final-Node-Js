import { Router } from 'express';
import { 
    getAllProducts,
    getProductById,
    createProduct,
    deleteProduct,
 } from '../controllers/products.controller.js';

const productsRouter = Router();

productsRouter.get('/', getAllProducts);
productsRouter.get('/:id', getProductById);
productsRouter.post('/', createProduct);
productsRouter.delete('/:id', deleteProduct)

export default productsRouter;