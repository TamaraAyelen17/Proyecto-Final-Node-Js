import { db } from '../data/data.js';
import {
    collection,
    getDocs,
    getDoc,
    addDoc,
    deleteDoc,
    doc
} from 'firebase/firestore';

const productsCollection = collection(db, 'products');

export async function getAllProducts() {
  const querySnapshot = await getDocs(productsCollection);
  const products = [];

  querySnapshot.forEach((docSnap) => {
    const data = docSnap.data();
    if (data && data.name && data.price) {
      products.push({
        id: docSnap.id,   
        name: data.name,
        price: data.price
      });
    }
  });

  return products;
};

export async function getProductById(id) {
  const productDoc = await getDoc(doc(productsCollection, id));
  if (productDoc.exists()) {
    const data = productDoc.data();
    return {
      id: productDoc.id,
      name: data.name,
      price: data.price
    };
  } else {
    return null;
  }
};

export async function saveProduct(product) {
  const docRef = await addDoc(productsCollection, {
    name: product.name,
    price: product.price
  });
  return {
    id: docRef.id,
    name: product.name,
    price: product.price
  };
}

export async function deleteProduct(id) {
    const productRef = doc(productsCollection, id);
    const snapshot = await getDoc(productRef);

    if (!snapshot.exists()) {
        return false; 
    }
    await deleteDoc(productRef);
    return true; 
}