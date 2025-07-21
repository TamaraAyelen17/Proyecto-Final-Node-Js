import { productsServices } from "../services/products.service.js";

export const getAllProducts = async (req, res) => {
    try {
        const products = await productsServices.getAllProducts();
        res.status(200).json({ message: "Lista de productos", payload: products});
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los productos', error });
    }
};

export const getProductById = async (req, res) => {
    const id = req.params.id;
    const product = await productsServices.getProductById(id);
    if (product) {
        res.status(200).json(product);
    } else {
        res.status(404).json({ message: 'Producto no encontrado' });
    }
};

export const createProduct = async (req, res) => {
  const { name, price } = req.body;

  if (!name || price === undefined) {
    return res.status(400).json({ message: 'El nombre y el precio son obligatorios' });
  }

  try {
    const newProduct = await productsServices.createProduct({ name, price });

    res.status(201).json({
      message: 'Producto creado correctamente',
      product: newProduct
    });
  } catch (error) {
    console.error('Error al crear producto:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

export const deleteProduct = async (req, res) => {
    const id = req.params.id;
    const success = await productsServices.deleteProduct(id);
    if (success) {
        res.status(200).json({ message: 'Producto eliminado correctamente' });
    } else {
        res.status(404).json({ message: 'Producto no encontrado' });
    }
};
