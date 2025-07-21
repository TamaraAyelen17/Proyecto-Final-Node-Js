import * as productsModel from '../models/products.model.js'

const getAllProducts = () => {
    return productsModel.getAllProducts();
};
const getProductById = async (id) => {
    return productsModel.getProductById(id);
};

const createProduct = async (productData) => {
  return productsModel.saveProduct(productData);
};


const deleteProduct = async (id) => {
    return productsModel.deleteProduct(id);
}

export const productsServices = {
    getAllProducts,
    getProductById,
    createProduct,
    deleteProduct
};